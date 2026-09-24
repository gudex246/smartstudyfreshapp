/**
 * Utility functions for cleaning unnecessary formatting symbols (stars, hashtags, bullets, etc.)
 * from explanations, tutor outputs, and lecture notes.
 */

export function cleanSymbols(text: string): string {
  if (!text) return '';
  return text
    // Remove markdown header indicators like #, ##, ###, ####
    .replace(/^#{1,6}\s*/gm, '')
    .replace(/#{1,6}\s*/g, '')
    // Remove bold and italic asterisks (**text**, *text*, ***text***)
    .replace(/\*{1,3}([\s\S]*?)\*{1,3}/g, '$1')
    // Remove any remaining standalone asterisks
    .replace(/\*/g, '')
    // Remove bullet characters and dash markers at beginning of lines
    .replace(/^[ \t]*[•●▪■\-\*]\s+/gm, '')
    // Remove bullet characters anywhere in text
    .replace(/[•●▪■]/g, '')
    // Remove LaTeX dollar signs ($x$, $$x$$)
    .replace(/\${1,2}/g, '')
    // Remove markdown code backticks
    .replace(/`{1,3}/g, '')
    // Clean up excessive blank lines
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * Cleans question titles by stripping all hardcoded leading numbers, decimal/hierarchical
 * numbers (e.g. "1.1", "1.1.", "2.1"), duplicate/second numbers (e.g. "1. 1.", "6. 1."),
 * and exam item prefixes so that questions only display their single sequential increasing number.
 */
export function cleanQuestionText(raw: string): string {
  if (!raw) return '';
  let text = cleanSymbols(raw).trim();

  const partNumberWords = 'one|two|three|four|five|six|seven|eight|nine|ten|first|second|third|fourth|fifth';
  const partRegex = new RegExp(
    `^(?:Part|Section|Sec|Unit|Chapter)\\s+(?:[IVXLCDMivxlcdm]+|\\d+|(?:${partNumberWords}))(?:\\s*\\([0-9a-z]+\\))?(?:\\s*[\\:\\-\\–\\—]\\s*(?:Multiple\\s*Choice|True\\s*\\/?\\s*False|Matching|Workout|Short\\s*Answer|Problem\\s*Solving)(?:\\s+Items)?(?:\\s*\\([0-9%\\s]+\\))?)?[\\.\\:\\-\\–\\—\\)]*\\s*`,
    'i'
  );

  let prev = '';
  while (prev !== text) {
    prev = text;
    // Strip Part / Section prefixes (e.g. "Part One (1):", "Part Two (21):", "Part 1:", "PART 2")
    text = text.replace(partRegex, '').trim();

    // Strip Question / Item prefixes like "Question 1:", "Q1.", "Item 1.", "Problem 1."
    text = text.replace(/^(?:Question|Q|Item|Problem)\s*\d+[\.\:\-\–\—\)]*\s*/i, '').trim();

    // Strip standalone numbers in parentheses or brackets like "(1):", "(21):", "(3a)", "[1]"
    text = text.replace(/^\(?[0-9]+[a-z]?\)[\.\:\-\–\—]?\s*/i, '').trim();

    // Match hierarchical numbers like 1.1, 1.1., 1.2.3, 1.2.3.
    text = text.replace(/^\d+(?:\.\d+)+[\.\)\:\-\–\—\]]?\s*/, '').trim();

    // Match double or compound leading numbers like "1. 1.", "1. 1", "1 1.", "6. 1."
    text = text.replace(/^\d+[\.\)\:\-]?\s+\d+[\.\)\:\-]?\s+/, '').trim();

    // Match single numbers with punctuation: 1., 1), 1:, 1-, (1)
    text = text.replace(/^\(?\d+\s*[\.\)\:\-\–\—\]]\s*/, '').trim();

    // Match Roman numerals like I., II., III.
    text = text.replace(/^[IVXLCDMivxlcdm]+[\.\)\:\-\–\—]\s*/, '').trim();

    // Strip leftover leading punctuation colons, hyphens, dashes, dots
    text = text.replace(/^[\s\:\-\–\—\.]+/g, '').trim();
  }

  return text;
}

/**
 * Strips hardcoded option prefixes (e.g. "A) ", "A. ", "a) ") so that
 * the UI badge (A, B, C, D) does not repeat.
 */
export function cleanOptionText(raw: string): string {
  if (!raw) return '';
  let text = cleanSymbols(raw).trim();
  text = text.replace(/^[A-Da-d][\.\)\:\-]\s*/, '').trim();
  return text;
}
