import { Chapter } from '../types';

export const PHYSICS_MODULE_CHAPTERS: Chapter[] = [
  {
    id: 'phys-ch1',
    courseId: 'phys-1011',
    number: 1,
    title: 'Chapter 1: Preliminaries, Units, Vectors & Measurement 📏',
    summary: 'Physical quantities, 7 SI base units, derived units, dimensional analysis, uncertainty & significant digits, vector addition, resolution, and unit vector notation.',
    readTimeMinutes: 15,
    keyFormulas: [
      '7 SI Base Quantities: Length (m), Mass (kg), Time (s), Electric Current (A), Temperature (K), Amount of Substance (mol), Luminous Intensity (cd)',
      'Uncertainty Rule of Thumb: Scale device error = Smallest scale division / 2; Digital device error = Smallest displayed increment',
      'Vector Magnitude (2D & 3D): |A| = sqrt(Ax² + Ay²) and |A| = sqrt(Ax² + Ay² + Az²)',
      'Components: Ax = A · cos(θ), Ay = A · sin(θ), tan(θ) = Ay / Ax',
      'Unit Vector: u_A = A / |A|, where |u_A| = 1',
      'Vector Addition: A + B = (Ax + Bx)i + (Ay + By)j + (Az + Bz)k'
    ],
    content: `Chapter 1: Preliminaries, Units, Vectors & Measurement 📏

1.1 Physical Quantities and SI Units 🌐
Physics is inherently an experimental science of measurement, dealing with matter, energy, and their fundamental relationships.
A physical quantity is an assignable property of a body or phenomenon that can be quantified.

Base vs Derived Quantities:
1. Basic Physical Quantities: Fundamental quantities that cannot be defined in terms of other quantities.
   • Length (Meter, m) — dimension [L]
   • Mass (Kilogram, kg) — dimension [M]
   • Time (Second, s) — dimension [T]
   • Electric Current (Ampere, A) — dimension [I]
   • Thermodynamic Temperature (Kelvin, K) — dimension [θ]
   • Amount of Substance (Mole, mol) — dimension [N]
   • Luminous Intensity (Candela, cd) — dimension [J]

2. Derived Physical Quantities: Formed as mathematical combinations of base quantities.
   • Velocity: v = distance / time, unit: m/s, dimension: [LT⁻¹]
   • Acceleration: a = velocity / time, unit: m/s², dimension: [LT⁻²]
   • Force: F = m · a, unit: Newton (N = kg·m/s²), dimension: [MLT⁻²]
   • Pressure: P = F / A, unit: Pascal (Pa = N/m²), dimension: [ML⁻¹T⁻²]
   • Work & Energy: W = F · d, unit: Joule (J = N·m), dimension: [ML²T⁻²]
   • Power: P = Work / time, unit: Watt (W = J/s), dimension: [ML²T⁻³]

Metric Prefixes:
Peta (10¹⁵), Tera (10¹²), Giga (10⁹), Mega (10⁶), Kilo (10³), Deci (10⁻¹), Centi (10⁻²), Milli (10⁻³), Micro (10⁻⁶), Nano (10⁻⁹), Pico (10⁻¹²), Femto (10⁻¹⁵).

1.2 Measurement, Uncertainty and Significant Digits 🎯
No physical measurement can be infinitely accurate. All experimental measurements contain uncertainty (error).

Types of Experimental Errors:
1. Systematic Errors: Arise from imperfect calibration of instruments, zero-errors, or faulty experimental setups. They consistently bias results in one direction (too high or too low). Correctable through recalibration.
2. Random Errors: Unpredictable fluctuations caused by environmental variations or the limits of instrument precision. Equal chance of being positive or negative; minimized by repeated measurements and statistical averaging.

Rules of Thumb for Instrument Uncertainty:
• Analog / Scale Measuring Devices: Uncertainty = (Smallest scale increment) / 2.
  Example: Meter stick with 1 mm markings has uncertainty = ± 0.5 mm = ± 0.05 cm.
• Digital Instruments: Uncertainty = Smallest displayed digit.
  Example: Digital balance reading 5.7513 kg has uncertainty = ± 0.0001 kg.
• Preferred Reporting Format: Measurement = x_best ± Δx

Rules for Significant Digits:
1. All non-zero digits are significant.
2. Zeros between non-zero digits are always significant (e.g., 405 has 3 sig figs).
3. Leading zeros used purely as placeholders to locate the decimal point are not significant (e.g., 0.0062 has 2 sig figs).
4. Trailing zeros after a decimal point are significant (e.g., 4.0500 has 5 sig figs).
5. Multiplication / Division Rule: The product or quotient can have no more significant figures than the factor with the fewest significant figures.
6. Addition / Subtraction Rule: The result can have no more decimal places than the term with the fewest decimal places.

1.3 Vectors: Composition, Resolution & Unit Vectors 🧭
• Scalar Quantity: Specified completely by magnitude and unit (mass, time, speed, temperature). Follows standard arithmetic.
• Vector Quantity: Specified by both magnitude and spatial direction (displacement, velocity, acceleration, force). Follows vector algebra.

Graphical Addition:
To add vectors graphically, arrange them head-to-tail. The resultant vector R connects the tail of the first vector to the head of the last vector.

Parallelogram Law of Vector Addition:
For two concurrent vectors A and B forming angle θ:
• Magnitude: R = sqrt(A² + B² + 2·A·B·cos(θ))
• Direction: tan(α) = (B · sin(θ)) / (A + B · cos(θ))

Component Resolution (2D & 3D):
Given vector A at angle θ to the positive x-axis:
• Ax = A · cos(θ)
• Ay = A · sin(θ)
• Magnitude: A = sqrt(Ax² + Ay²)
• Direction: θ = arctan(Ay / Ax)
In 3D space: A = Ax·i + Ay·j + Az·k, with magnitude |A| = sqrt(Ax² + Ay² + Az²).

Unit Vectors:
A dimensionless vector with a magnitude of exactly 1, pointing along a coordinate axis:
• i points along +x axis, j points along +y axis, k points along +z axis.
• Unit vector in direction of vector A: u_A = A / |A| = (Ax/|A|)i + (Ay/|A|)j + (Az/|A|)k.`
  },
  {
    id: 'phys-ch2',
    courseId: 'phys-1011',
    number: 2,
    title: 'Chapter 2: Kinematics and Dynamics of Particles 🚀',
    summary: '1D & 2D motion, constant acceleration equations, free fall, parabolic projectile motion, Newton’s 3 laws, friction, universal gravitation, Kepler’s 3 laws, satellite motion, work-energy theorem, momentum, and collisions.',
    readTimeMinutes: 18,
    keyFormulas: [
      'Kinematic Equations: vf = vi + a·t, Δx = vi·t + (1/2)·a·t², vf² = vi² + 2·a·Δx',
      'Free Fall: a = -g (taking upward positive, g = 9.8 m/s²)',
      'Projectile Motion: Time of flight t_total = (2·vi·sin(θ))/g; Max height H = (vi²·sin²(θ))/(2g); Range R = (vi²·sin(2θ))/g',
      'Newton’s 2nd Law: F_net = m · a = dp/dt',
      'Friction: Static fs <= μs · N, Kinetic fk = μk · N (where μk < μs)',
      'Universal Gravitation: F = G · (m1 · m2) / r², where G = 6.67 × 10⁻¹¹ N·m²/kg²',
      'Kepler’s 3rd Law: T² = (4π² / (G·M)) · a³',
      'Work-Kinetic Energy Theorem: W_net = ΔK = (1/2)·m·vf² - (1/2)·m·vi²',
      'Linear Momentum & Impulse: p = m · v, Impulse J = F_avg · Δt = Δp',
      '1D Elastic Collisions: Both momentum and kinetic energy are conserved'
    ],
    content: `Chapter 2: Kinematics and Dynamics of Particles 🚀

2.1 Kinematics in One and Two Dimensions 🏎️
Kinematics describes motion without regard to the forces causing it.

Key Terms:
• Position (r): Location relative to a chosen reference frame.
• Displacement (Δx): Change in position; Δx = x_final - x_initial (vector).
• Distance: Total path length traversed (scalar).
• Average Velocity: v_avg = Δx / Δt
• Average Speed: speed_avg = total distance / total time
• Instantaneous Velocity: v = dx / dt (slope of tangent on x-t graph)
• Average Acceleration: a_avg = Δv / Δt
• Instantaneous Acceleration: a = dv / dt = d²x / dt²

Motion with Constant Acceleration (1D Equations):
1. vf = vi + a · t
2. Δx = ((vi + vf) / 2) · t
3. Δx = vi · t + (1/2) · a · t²
4. vf² = vi² + 2 · a · Δx

Free Fall Motion:
An idealized motion under the influence of gravity alone (air resistance neglected).
Every object near Earth's surface accelerates downward at g = 9.8 m/s².
• If upward is chosen positive: a = -g
• Equations: vf = vi - g·t; Δy = vi·t - (1/2)·g·t²; vf² = vi² - 2·g·Δy

Projectile Motion (2D Motion):
Curvilinear motion of an object projected into the air, moving in a parabolic trajectory under constant downward acceleration g.
• Horizontal Motion (constant velocity, ax = 0):
  vx = vi · cos(θ)
  x = (vi · cos(θ)) · t
• Vertical Motion (constant acceleration, ay = -g):
  vy = vi · sin(θ) - g · t
  y = (vi · sin(θ)) · t - (1/2) · g · t²
• Trajectory Equation: y = (tan(θ))·x - [g / (2·vi²·cos²(θ))] · x² (Equation of a parabola)
• Key Quantities:
  - Peak Time: t_peak = (vi · sin(θ)) / g
  - Total Time of Flight: t_total = 2 · t_peak = (2 · vi · sin(θ)) / g
  - Maximum Height: H_max = (vi² · sin²(θ)) / (2g)
  - Horizontal Range: R = (vi² · sin(2θ)) / g
  - Maximum Range occurs at launch angle θ = 45°

---

2.2 Dynamics: Force, Newton’s Laws & Gravitation ⚖️
Dynamics explains the physical causes of motion (forces).
• Fundamental Forces in Nature (increasing strength):
  Gravitational Force < Weak Nuclear Force < Electromagnetic Force < Strong Nuclear Force

Newton’s Three Laws of Motion:
1. Newton’s First Law (Law of Inertia):
   A body continues in its state of rest or uniform motion in a straight line unless acted upon by a non-zero net external force. Mass is the quantitative measure of inertia.
2. Newton’s Second Law:
   The acceleration of an object is directly proportional to the net force acting upon it and inversely proportional to its mass:
   F_net = m · a
3. Newton’s Third Law (Action-Reaction):
   When two objects interact, the force F_12 exerted by object 1 on object 2 is equal in magnitude and opposite in direction to the force F_21 exerted by object 2 on object 1:
   F_12 = - F_21

Frictional Forces:
Force opposing relative motion between surfaces in contact.
• Static Friction (fs): Prevents motion. Up to a maximum limit: fs <= μs · N.
  At the verge of impending slip: fs_max = μs · N
• Kinetic Friction (fk): Opposes active sliding motion: fk = μk · N
• Always: μk < μs (it is harder to start motion than to maintain it).

Universal Gravitation & Planetary Motion (Isaac Newton & Johannes Kepler) 🌌:
• Law of Universal Gravitation: Every point mass attracts every other point mass with a force:
  F = G · (m1 · m2) / r²
  where G = 6.67 × 10⁻¹¹ N·m²/kg²
• Acceleration due to gravity at height h:
  g = G · M_earth / (R_earth + h)²
• Kepler’s Three Laws of Planetary Motion:
  1. Law of Orbits: Planets orbit the Sun in elliptical paths, with the Sun located at one focal point.
  2. Law of Areas: A radius vector joining any planet to the Sun sweeps out equal areas in equal intervals of time (orbital speed is highest at perihelion, slowest at aphelion).
  3. Law of Periods (Harmonies): The square of the orbital period T is proportional to the cube of the semi-major axis a:
     T² = (4π² / (G · M_sun)) · a³

Satellite Motion:
Gravitational force provides the required centripetal force:
m · v² / r = G · M · m / r²
• Orbital Speed: v_orbit = sqrt(G · M / r) (independent of satellite mass!)
• Orbital Period: T = 2πr / v = sqrt(4π² · r³ / (G · M))
• Apparent Weightlessness: When in free fall, the supporting normal force N = 0.

---

2.3 Work, Energy, Momentum and Collisions ⚡
• Work Done by Constant Force:
  W = F · Δr · cos(θ) = F · Δx (in Joules, J = N·m).
• Work Done by Variable Force:
  W = integral of F(x) dx (Area under F-x curve).
  For a spring obeying Hooke's Law (Fs = -k·x):
  W_spring = (1/2) · k · xi² - (1/2) · k · xf²
• Elastic Potential Energy: U_elastic = (1/2) · k · x²

Work-Kinetic Energy Theorem:
The net work done on a particle equals the change in its kinetic energy:
W_net = ΔK = (1/2)·m·vf² - (1/2)·m·vi²

Conservation of Mechanical Energy:
For systems with only conservative forces (gravity, ideal springs):
K_initial + U_initial = K_final + U_final  (or ΔE_mech = 0)
• Gravitational Potential Energy: U_g = m · g · y

Linear Momentum and Impulse 💥:
• Linear Momentum: p = m · v (vector quantity, kg·m/s).
• Newton's 2nd Law: F_net = Δp / Δt
• Impulse: J = F_avg · Δt = Δp (Impulse equals change in momentum).
• Law of Conservation of Linear Momentum:
  In an isolated system (no net external force), total linear momentum is strictly conserved:
  p_initial_total = p_final_total

Collisions in One Dimension:
1. Elastic Collision: Both linear momentum and kinetic energy are conserved.
   • For head-on collision with m2 at rest:
     v1f = [(m1 - m2) / (m1 + m2)] · v1i
     v2f = [(2·m1) / (m1 + m2)] · v1i
2. Inelastic Collision: Linear momentum is conserved, but kinetic energy is not conserved (lost as thermal/sound energy).
   • Perfectly (Completely) Inelastic: Bodies stick together after impact:
     vf = (m1·v1i + m2·v2i) / (m1 + m2)

Center of Mass (CM):
The unique point where the entire mass of a system can be considered concentrated:
r_cm = (Σ mi · ri) / (Σ mi) = (1/M) · Σ mi · ri`
  },
  {
    id: 'phys-ch3',
    courseId: 'phys-1011',
    number: 3,
    title: 'Chapter 3: Fluid Mechanics 🌊',
    summary: 'Elasticity of bulk matter (stresses, strains, Young’s, Shear, and Bulk moduli), static fluids, pressure, Pascal’s principle, Archimedes’ principle, continuity equation, and Bernoulli’s equation.',
    readTimeMinutes: 16,
    keyFormulas: [
      'Stress & Strain: Stress = Force / Area (Pa); Strain = ΔL / L0 (dimensionless)',
      'Moduli: Young’s Y = (F/A) / (ΔL/L0); Shear S = (F/A) / (x/h); Bulk B = -ΔP / (ΔV/V0)',
      'Hydrostatic Pressure: P = P0 + ρ · g · h, where P_gauge = ρ · g · h',
      'Pascal’s Principle: F1 / A1 = F2 / A2 ➔ F2 = F1 · (A2 / A1)',
      'Archimedes’ Principle: F_buoyant = Weight of displaced fluid = ρ_fluid · V_displaced · g',
      'Equation of Continuity: A1 · v1 = A2 · v2 = Constant (Volume Flow Rate Q)',
      'Bernoulli’s Equation: P + (1/2)·ρ·v² + ρ·g·y = Constant'
    ],
    content: `Chapter 3: Fluid Mechanics 🌊

3.1 Properties of Bulk Matter & Elasticity 🧱
Matter undergoes deformation under applied external forces:
• Elastic Behavior: Reversible deformation; returns to original dimensions once the stress is removed.
• Plastic Behavior: Irreversible, permanent deformation exceeding the elastic limit.

Stress and Strain:
• Stress: Force per unit area causing deformation; unit Pascal (Pa = N/m²).
• Strain: Fractional change in configuration (dimensionless).

Three Types of Stress, Strain and Elastic Moduli:
1. Tensile / Compressive:
   • Tensile Stress = F_perpendicular / A
   • Tensile Strain = ΔL / L0
   • Young's Modulus: Y = (F_perp / A) / (ΔL / L0)
   Measures resistance to length change.
2. Shear (Tangential):
   • Shear Stress = F_tangential / A
   • Shear Strain = x / h = tan(φ)
   • Shear Modulus: S = (F_parallel / A) / (x / h)
   Measures resistance to sliding of internal planes. (Liquids have S = 0).
3. Volume / Hydraulic:
   • Volume Stress = Change in pressure ΔP
   • Volume Strain = ΔV / V0
   • Bulk Modulus: B = - ΔP / (ΔV / V0)
   Measures resistance to uniform compression. Compressibility k = 1 / B.
• Strain Energy in Stretched Wire: E = (1/2) · k · x²

---

3.2 Density and Pressure in Static Fluids 💧
• Density (ρ): Mass per unit volume; ρ = m / V (SI unit: kg/m³). Water at 4°C has ρ = 1,000 kg/m³.
• Specific Gravity (SG): Ratio of substance density to pure water density at 4°C:
  SG = ρ_substance / 1,000 kg/m³ (dimensionless).

Fluid Pressure:
P = F_perpendicular / A (Unit: Pa = N/m²; 1 atm = 101.3 kPa).
• Variation of Pressure with Depth:
  P = P0 + ρ · g · h
  Pressure depends only on depth h and fluid density ρ; it does NOT depend on container shape.
• Gauge Pressure: P_gauge = P_absolute - P_atmosphere = ρ · g · h
• Absolute Pressure: P_abs = P_gauge + P_atm

Pascal's Principle 🚜:
Pressure applied to an enclosed, incompressible fluid is transmitted undiminished to every point of the fluid and the vessel walls.
• Hydraulic Press Application:
  P1 = P2  ==>  F1 / A1 = F2 / A2  ==>  F2 = F1 · (A2 / A1)
  A small force on a small piston lifts a heavy load on a large piston.

Archimedes’ Principle & Buoyancy ⛵:
Any body completely or partially submerged in a fluid experiences an upward buoyant force equal to the weight of the displaced fluid:
F_buoyant = W_displaced_fluid = ρ_fluid · V_submerged · g
• Floatation Conditions:
  - If ρ_object < ρ_fluid: Body floats with fraction (ρ_object / ρ_fluid) submerged.
  - If ρ_object = ρ_fluid: Neutrally buoyant (floats at any depth).
  - If ρ_object > ρ_fluid: Body sinks to bottom.

---

3.3 Fluid Dynamics: Moving Fluids 🌪️
Ideal Fluid Assumptions:
1. Non-viscous (no internal friction between adjacent fluid layers).
2. Incompressible (density ρ remains uniform and constant).
3. Steady / Laminar flow (velocity at any fixed point remains constant in time).
4. Irrotational flow (no angular velocity or whirlpools about any point).

Equation of Continuity (Conservation of Mass):
For an incompressible fluid flowing through a tube with varying cross-sectional area:
A1 · v1 = A2 · v2 = Constant
• Volume Flow Rate (Q): Q = A · v = dV / dt (m³/s).
• Implication: Narrowing the pipe (reducing A) forces the flow velocity v to increase.

Bernoulli's Equation (Conservation of Energy):
Along any streamline in steady, non-viscous flow:
P + (1/2) · ρ · v² + ρ · g · y = Constant
Between any two points in the fluid:
P1 + (1/2)·ρ·v1² + ρ·g·y1 = P2 + (1/2)·ρ·v2² + ρ·g·y2
• Physical Meaning: Swiftly moving fluids exert lower pressure than slower-moving fluids.
• Everyday Applications: Aerodynamic lift on aircraft wings, Venturi tubes, atomizers/sprinklers, spinning curve balls in sports.`
  },
  {
    id: 'phys-ch4',
    courseId: 'phys-1011',
    number: 4,
    title: 'Chapter 4: Heat and Thermodynamics 🔥',
    summary: 'Temperature & Zeroth law, heat transfer (conduction, convection, radiation), thermal expansion, First Law of Thermodynamics, thermodynamic processes, specific heat capacity, and latent heat.',
    readTimeMinutes: 16,
    keyFormulas: [
      'Zeroth Law: If A and B are in thermal equilibrium with C, then A and B are in thermal equilibrium with each other',
      'Linear Expansion: ΔL = α · L0 · ΔT; Volume Expansion: ΔV = β · V0 · ΔT (where β ≈ 3α)',
      'Heat Transfer: Conduction H = k·A·(Th - Tc)/L; Radiation P = e·σ·A·T⁴',
      'First Law of Thermodynamics: ΔU = Q - W (where W is work done by system)',
      'Work in Isobaric Process: W = P · ΔV = P · (Vf - Vi)',
      'Special Thermodynamic Cases: Isochoric W = 0 ➔ ΔU = Q; Isothermal ΔU = 0 ➔ Q = W; Adiabatic Q = 0 ➔ ΔU = -W; Cyclic ΔU = 0 ➔ Q = W',
      'Specific Heat: Q = m · c · ΔT; Latent Heat: Q = ± m · L (Fusion Lf or Vaporization Lv)'
    ],
    content: `Chapter 4: Heat and Thermodynamics 🔥

4.1 Temperature and the Zeroth Law 🌡️
• Heat: Energy transferred between systems solely due to a temperature difference.
• Temperature: Measure of the average random translational kinetic energy of constituent molecules.
• Thermal Equilibrium: State where two bodies in thermal contact cease net energy exchange.
• Zeroth Law of Thermodynamics:
  If body A and body B are separately in thermal equilibrium with a third body C, then A and B are in thermal equilibrium with each other. This enables temperature to serve as an indicator of thermal state.
• Temperature Conversions:
  T(K) = T(°C) + 273.15
  T(°F) = (9/5) · T(°C) + 32
  Triple point of water = 273.16 K (0.01°C).

---

4.2 Heat Transfer Mechanisms ☀️
1. Conduction: Transfer of kinetic energy via molecular and electron collisions through stationary matter.
   Heat conduction rate: H = Q / t = k · A · (T_hot - T_cold) / L
   (k = thermal conductivity of material).
2. Convection: Heat transfer through the bulk movement of fluid (liquid or gas) driven by density differences.
3. Radiation: Transfer of energy through electromagnetic waves (infrared photons) requiring no material medium.
   Stefan-Boltzmann Law: P = e · σ · A · T⁴ (where σ = 5.67 × 10⁻⁸ W/m²·K⁴).

---

4.3 Thermal Expansion of Solids and Liquids 📏
As temperature increases, thermal vibration amplitudes widen average interatomic spacing.
• Linear Expansion (solids):
  ΔL = α · L0 · ΔT
  Final length: L = L0 · (1 + α · ΔT)
• Area Expansion: ΔA ≈ 2α · A0 · ΔT
• Volume Expansion (solids and liquids):
  ΔV = β · V0 · ΔT, where β ≈ 3α for isotropic solids.
• Anomalous Expansion of Water:
  Water has its maximum density at 4°C. Between 0°C and 4°C, water contracts as temperature rises. Consequently, lakes freeze from the surface downward, insulating aquatic ecosystems below.

---

4.4 Heat, Work & First Law of Thermodynamics ⚙️
• Internal Energy (U): Total microscopic energy of a system (molecular kinetic + interatomic potential energy).
• Work Done by an Expanding Gas:
  W = integral of P dV. (Positive when gas expands, negative when gas is compressed).
• First Law of Thermodynamics (Conservation of Energy):
  ΔU = Q - W
  (ΔU = change in internal energy; Q = heat added to system; W = work done by system).
  Note: Q and W depend on the path taken, but ΔU is state-dependent (path-independent).

Four Special Thermodynamic Processes:
1. Isobaric Process (Constant Pressure, P = const):
   W = P · (V_final - V_initial)
   All three terms (ΔU, Q, W) are non-zero.
2. Isochoric / Isovolumetric Process (Constant Volume, V = const):
   ΔV = 0  ==>  W = 0
   ΔU = Q (all heat added directly changes internal energy and temperature).
3. Isothermal Process (Constant Temperature, T = const):
   For ideal gas: ΔU = 0
   Q = W = n · R · T · ln(Vf / Vi)
   All absorbed heat is converted directly into mechanical work.
4. Adiabatic Process (Thermally Insulated, Q = 0):
   Q = 0  ==>  ΔU = - W
   If gas expands adiabatically, it does work at the expense of its own internal energy, causing temperature to fall.
5. Cyclic Process: Starts and ends in the identical state (ΔU = 0  ==>  Q_net = W_net).

---

4.5 Calorimetry: Specific Heat Capacity and Latent Heat 🧊
• Heat Capacity (C): Heat required to raise sample temperature by 1°C.
• Specific Heat Capacity (c): Heat needed to raise 1 kg of a substance by 1 K:
  Q = m · c · ΔT
  Water has an exceptionally high specific heat: c_water = 4,186 J/kg·°C.
• Principle of Conservation of Heat:
  In an insulated calorimeter: Q_lost + Q_gained = 0  ==>  Q_lost = - Q_gained

Phase Transitions and Latent Heat:
During a phase change, heat is exchanged at constant temperature:
Q = ± m · L
• Latent Heat of Fusion (Lf): Solid to liquid transition (Ice: Lf = 3.33 × 10⁵ J/kg).
• Latent Heat of Vaporization (Lv): Liquid to vapor transition (Water: Lv = 2.26 × 10⁶ J/kg).`
  },
  {
    id: 'phys-ch5',
    courseId: 'phys-1011',
    number: 5,
    title: 'Chapter 5: Oscillations, Waves and Optics 🔔',
    summary: 'Periodic motion & SHM, equations of SHM, simple pendulum, mechanical vs electromagnetic waves, Doppler effect, plane mirrors, and thin lenses image formation.',
    readTimeMinutes: 16,
    keyFormulas: [
      'SHM Equation: x(t) = A · cos(ωt + φ), v(t) = -ω·A·sin(ωt + φ), a(t) = -ω²·x',
      'Angular Frequency: ω = 2π·f = 2π / T; Spring: ω = sqrt(k / m); Pendulum: ω = sqrt(g / L)',
      'Simple Pendulum Period: T = 2π · sqrt(L / g)',
      'Total Energy of SHM: E = (1/2)·k·A² = (1/2)·m·v² + (1/2)·k·x²',
      'Wave Speed Formula: v = λ · f = λ / T',
      'Doppler Effect: fo = fs · [(v ± vo) / (v ∓ vs)] (Observer on top, Source on bottom)',
      'Thin Lens / Mirror Equation: 1/f = 1/do + 1/di; Magnification m = -di / do = hi / ho'
    ],
    content: `Chapter 5: Oscillations, Waves and Optics 🔔

5.1 Simple Harmonic Motion (SHM) 🌀
Oscillatory motion occurring when a restoring force is directly proportional to displacement from equilibrium and directed toward equilibrium (Hooke's Law: F = -k·x).
• Acceleration in SHM: a = - (k / m) · x = - ω² · x

Kinematic Equations of SHM:
• Displacement: x(t) = A · cos(ω · t + φ)
• Velocity: v(t) = dx/dt = - ω · A · sin(ω · t + φ)
  Maximum Speed: v_max = ω · A (at equilibrium x = 0).
• Acceleration: a(t) = dv/dt = - ω² · A · cos(ω · t + φ) = - ω² · x
  Maximum Acceleration: a_max = ω² · A (at endpoints x = ±A).
• Parameters:
  - Amplitude (A): Maximum displacement from equilibrium.
  - Angular Frequency (ω): ω = 2π·f = 2π / T (rad/s). For mass-spring: ω = sqrt(k / m).
  - Period (T): Time for one complete cycle: T = 2π · sqrt(m / k).
  - Frequency (f): Cycles per second: f = 1 / T (Hertz, Hz).

Energy of SHM:
• Kinetic Energy: K = (1/2) · m · v²
• Potential Energy: U = (1/2) · k · x²
• Total Mechanical Energy: E_total = K + U = (1/2) · k · A² (Constant at all times!)

The Simple Pendulum:
Consists of a point mass m suspended by a massless string of length L.
For small angles (θ <= 10°), the restoring force is F_tangential = - m · g · sin(θ) ≈ - m · g · θ.
• Angular frequency: ω = sqrt(g / L)
• Period: T = 2π · sqrt(L / g)
• Independence: The period is independent of the bob's mass and amplitude!

---

5.2 Waves and Wave Motion 🌊
A wave is a traveling disturbance that transports energy and momentum through space without transferring matter.
• Types by Propagation Medium:
  - Mechanical Waves: Require a material medium (sound waves, water waves, seismic waves).
  - Electromagnetic Waves: Do not require a medium; propagate through vacuum at c = 3 × 10⁸ m/s (light, X-rays, radio).
• Types by Particle Vibration Direction:
  - Transverse Waves: Particles vibrate perpendicular to wave travel direction (light, guitar strings).
  - Longitudinal Waves: Particles vibrate parallel to wave travel direction (sound waves: compressions and rarefactions).
• Fundamental Wave Relationship:
  v = λ · f = λ / T
  (v = speed in m/s, λ = wavelength in meters, f = frequency in Hz).

---

5.3 The Doppler Effect 🚑
The perceived shift in frequency observed when there is relative motion between a wave source and an observer.
General Doppler Formula for Sound:
fo = fs · [(v ± vo) / (v ∓ vs)]
where:
• v = speed of sound in air (≈ 343 m/s)
• vo = speed of the observer
• vs = speed of the source
• Sign Rules:
  - Top sign (numerator +vo, denominator -vs) applies when moving TOWARD each other (frequency increases).
  - Bottom sign (numerator -vo, denominator +vs) applies when moving AWAY from each other (frequency decreases).
• Applications: Police radar guns, medical ultrasound blood velocimetry, astronomical red-shift (expanding universe).

---

5.4 Geometric Optics: Mirrors and Lenses 🔍
Image Formation:
• Real Image: Light rays physically converge; can be projected onto a screen; inverted.
• Virtual Image: Light rays appear to diverge from behind the optic; cannot be projected; upright.

Plane Mirrors:
Always forms an image that is: 1. Virtual, 2. Upright, 3. Same size as object (m = +1), 4. Located behind mirror at di = -do, 5. Laterally inverted.

Spherical Mirrors and Thin Lenses:
• Lens / Mirror Equation:
  1 / f = 1 / do + 1 / di
• Linear Magnification:
  m = hi / ho = - di / do
• Sign Conventions:
  - Focal length f: Positive for Converging (Convex lens / Concave mirror); Negative for Diverging (Concave lens / Convex mirror).
  - Object distance do: Positive for real objects.
  - Image distance di: Positive for real images (opposite side for lenses, same side for mirrors); Negative for virtual images.
  - Magnification m: Positive = Upright image; Negative = Inverted image.`
  },
  {
    id: 'phys-ch6',
    courseId: 'phys-1011',
    number: 6,
    title: 'Chapter 6: Electromagnetism and Electronics ⚡',
    summary: 'Coulomb’s law, electric fields & potentials, Ohm’s law, resistors in series & parallel, Kirchhoff’s rules, magnetic force, Faraday & Lenz’s laws of induction, semiconductor physics, diodes, rectifiers, transistors, and logic gates.',
    readTimeMinutes: 18,
    keyFormulas: [
      'Coulomb’s Law: F = k · |q1 · q2| / r², where k = 8.99 × 10⁹ N·m²/C²',
      'Electric Field & Potential: E = F / q0 = k·q / r²; ΔV = ΔU / q0 = - E · Δx',
      'Ohm’s Law & Resistance: V = I · R; R = ρ · L / A',
      'Resistor Combinations: Series Req = R1 + R2 + ...; Parallel 1/Req = 1/R1 + 1/R2 + ...',
      'Kirchhoff’s Rules: Junction Rule Σ I_in = Σ I_out; Loop Rule Σ ΔV = 0',
      'Magnetic Force: F = q · v × B ➔ F = q · v · B · sin(θ)',
      'Faraday’s Law of Induction: Emf = - N · (ΔΦ / Δt), where Magnetic Flux Φ = B · A · cos(θ)',
      'Transistor Gain: Current Gain β = ΔIc / ΔIb'
    ],
    content: `Chapter 6: Electromagnetism and Electronics ⚡

6.1 Electrostatics and Electric Potential 🔋
• Electric Charge: Fundamental property of matter. Two kinds: positive and negative.
  - Quantized: q = n · e, where e = 1.602 × 10⁻¹⁹ C.
  - Conserved: Net charge in an isolated system is constant.
• Coulomb’s Law:
  F = k · (|q1 · q2|) / r²
  where k = 1 / (4πε0) = 8.988 × 10⁹ N·m²/C². Force is attractive for opposite charges, repulsive for like charges.
• Electric Field (E): Force per unit positive test charge:
  E = F / q0 = k · q / r² (in N/C or V/m).
  Field lines radiate outward from positive charges and terminate on negative charges; lines never cross.
• Electric Potential Difference (ΔV): Work done per unit charge moving against the electric field:
  ΔV = VB - VA = ΔU / q0 (in Volts, 1 V = 1 J/C).
  In a uniform field: ΔV = - E · Δx

---

6.2 Direct Current (DC) Circuits & Kirchhoff’s Rules 🔌
• Electric Current (I): Rate of charge flow: I = ΔQ / Δt (Ampere, A = C/s).
• Ohm’s Law: V = I · R
  - Resistance: R = ρ · L / A (depends on resistivity ρ, length L, cross-sectional area A).
  - Temperature dependence: R(T) = R0 · [1 + α · (T - T0)].
• Combinations of Resistors:
  - Series: Same current flows through all. Req = R1 + R2 + R3 + ...
  - Parallel: Same potential difference across all. 1/Req = 1/R1 + 1/R2 + 1/R3 + ...
• Electromotive Force (EMF) and Internal Resistance:
  Terminal Voltage: V_terminal = ε - I · r
  Circuit current: I = ε / (R_load + r)
• Kirchhoff’s Rules (for complex multi-loop circuits):
  1. Junction Rule (Conservation of Charge): Total current entering any node equals total current leaving:
     Σ I_in = Σ I_out
  2. Loop Rule (Conservation of Energy): The algebraic sum of potential changes across any closed loop is zero:
     Σ ΔV = 0

---

6.3 Magnetism & Electromagnetic Induction 🧲
• Magnetic Field (B): Produced by moving electric charges or currents. Unit: Tesla (1 T = 10⁴ Gauss).
• Magnetic Force on a Moving Charge:
  F = q · (v × B)  ==>  F = |q| · v · B · sin(θ)
  Direction determined by the Right-Hand Rule (RHR-1). Force is zero if charge moves parallel to B!
• Magnetic Flux (Φ): Measure of magnetic field lines penetrating a surface area:
  Φ = B · A · cos(θ) (Unit: Weber, 1 Wb = 1 T·m²).
• Faraday’s Law of Electromagnetic Induction:
  An induced electromotive force (emf) is produced in a loop whenever magnetic flux through it changes with time:
  ε = - N · (ΔΦ / Δt)
• Lenz’s Law: The direction of the induced emf/current always produces a magnetic field that opposes the change in flux that created it (represented by the negative sign).

---

6.4 Electronics: Semiconductors, Diodes, Transistors & Logic Gates 💻
• Energy Band Theory in Solids:
  - Valence Band (VB): Lower band occupied by valence electrons.
  - Conduction Band (CB): Upper band; electrons here are free to conduct.
  - Forbidden Energy Gap (Eg):
    * Conductors: Conduction and valence bands overlap (Eg = 0).
    * Insulators: Large band gap (Eg > 3 eV; e.g., Diamond = 6 eV).
    * Semiconductors: Narrow band gap (Eg < 3 eV; Silicon = 1.1 eV, Germanium = 0.7 eV).

Intrinsic vs. Extrinsic Semiconductors:
• Intrinsic: Pure semiconductor crystal (e.g., pure Si). Conduction occurs via thermally generated electron-hole pairs.
• Extrinsic (Doped): Electrical conductivity enhanced by adding trace impurities (doping):
  - N-Type: Doped with pentavalent donor atoms (Arsenic, Antimony, Phosphorus). Majority carriers = Electrons.
  - P-Type: Doped with trivalent acceptor atoms (Indium, Boron, Gallium). Majority carriers = Holes.

The P-N Junction Diode:
• Depletion Region: Formed by diffusion of electrons and holes across the junction, setting up an internal barrier potential (0.7 V for Si, 0.3 V for Ge).
• Biasing:
  - Forward Bias: P to positive, N to negative. Depletion layer narrows; diode conducts heavily (ON switch).
  - Reverse Bias: P to negative, N to positive. Depletion layer widens; blocks current (OFF switch).
• Rectification (AC to DC conversion):
  - Half-Wave Rectifier: Uses 1 diode; conducts only during positive half-cycles.
  - Full-Wave Bridge Rectifier: Uses 4 diodes in a bridge arrangement; conducts during both positive and negative half-cycles.

Transistors:
Three-layer semiconductor device (Emitter, Base, Collector) used for amplification and switching.
• Two Types: NPN and PNP.
• Common Emitter (CE) Configuration: Input to Base-Emitter (forward biased), Output from Collector-Emitter (reverse biased).
  Current Gain: β = ΔIc / ΔIb (typically 50 to 300).
  Output voltage is 180° out of phase with input signal.

Digital Logic Gates:
Binary switching circuits operating on inputs 0 (LOW, ≈0V) and 1 (HIGH, ≈5V):
• AND Gate: Output is 1 only if BOTH inputs are 1 (Y = A · B).
• OR Gate: Output is 1 if EITHER or both inputs are 1 (Y = A + B).
• NOT Gate (Inverter): Inverts input (Y = not A).
• NAND & NOR: Universal gates formed by inverting AND and OR outputs.`
  },
  {
    id: 'phys-ch7',
    courseId: 'phys-1011',
    number: 7,
    title: 'Chapter 7: Cross-Cutting Applications of Physics 🏥',
    summary: 'Soil physics & energy balance in agriculture, electric motors & generators, medical imaging (X-rays, CT, MRI, Ultrasound), radiation safety, radiocarbon dating, satellite/radio communication, and renewable energy technologies.',
    readTimeMinutes: 16,
    keyFormulas: [
      'Soil Surface Energy Balance: 0 = Rn + G + LE + H (Net radiation = Soil heat + Latent heat flux + Sensible heat)',
      'DC Motor & Generator: Motor converts electrical ➔ mechanical; Generator converts mechanical ➔ electrical (Faraday induction)',
      'Radiation Safety: Inverse Square Law: Intensity I ∝ 1 / d²; Three protection pillars: Time, Distance, Shielding',
      'Radioactive Decay Law: N(t) = N0 · e^(-λt); Radiocarbon Age: t = - (1/λ) · ln(N / N0)',
      'Carbon-14 Half-Life: t_1/2 = 5,730 ± 40 years (dates organic artifacts up to ~50,000 years)',
      'Hydropower: P = η · ρ · g · Q · H (Power generated from falling water)'
    ],
    content: `Chapter 7: Cross-Cutting Applications of Physics 🏥

7.1 Physics in Agriculture & Environment (Soil Physics) 🌱
Agrophysics applies physical principles to agricultural systems to limit environmental hazards and optimize crop production.
• Soil Structure & Composition:
  Optimal soil: 50% solids (45% minerals, 5% organic matter) + 50% pore space (25% water, 25% air).
• Physical Properties:
  - Soil Density: Particle density and bulk density.
  - Soil Porosity: Fraction of total volume occupied by voids/pores.
  - Soil Moisture Characteristics: Relationship between soil water content and matric potential.
• Surface Energy Balance Equation:
  0 = Rn + G + LE + H
  where:
  - Rn = Net incoming radiation
  - G = Soil heat flux (conduction into ground)
  - LE = Latent heat flux (evapotranspiration to atmosphere, product of evaporative flux E and latent heat of vaporization λ)
  - H = Sensible heat flux (warming of air above soil)
  Used to calculate crop evapo-transpiration, seed germination timing, and frost prevention.

---

7.2 Physics in Industry: Motors & Generators ⚙️
• Electric Motor: Converts electrical energy into mechanical rotary motion.
  - Principle: A current-carrying coil placed in a magnetic field experiences a magnetic torque: τ = N · I · A · B · sin(θ).
• Electric Generator: Converts mechanical rotational energy into electrical energy.
  - Principle: Electromagnetic induction (Faraday's Law). Rotating a coil within a magnetic field cuts lines of magnetic flux, generating an alternating EMF:
    ε = N · B · A · ω · sin(ωt).

---

7.3 Physics in Health Sciences & Medical Imaging 🏥
1. X-Ray Radiography:
   - High-energy, ionizing electromagnetic radiation produced by accelerating electrons from a heated cathode across a high voltage (20 - 200 kV) into a tungsten anode.
   - Dense tissues (bones) absorb X-rays strongly (radiopaque), appearing white on film; soft tissues appear dark.
2. Computed Tomography (CT Scan):
   - Combines multiple X-ray projections from a rotating gantry with computer reconstruction to generate detailed 3D cross-sectional tomographic slices.
3. Magnetic Resonance Imaging (MRI):
   - Non-ionizing diagnostic modality utilizing strong magnetic fields (1 - 3 Tesla) and radio-frequency (RF) pulses to probe the nuclear magnetic resonance of hydrogen protons in water and fat molecules within soft tissues.
4. Ultrasound Imaging (Medical Sonography):
   - Uses high-frequency sound waves (> 20 kHz, typically 2 - 15 MHz) emitted by piezoelectric transducers. Measures echoes reflected from acoustic impedance boundaries inside the body (non-ionizing; safe for fetal monitoring and cardiology).

Radiation Safety & Protection ☢️:
• Ionizing Radiation: Has sufficient quantum energy to eject orbital electrons from atoms (Alpha particles, Beta particles, Gamma rays, X-rays).
• Biological Damage Factors: Absorbed dose, radiation type/quality factor, and cellular sensitivity.
• Shielding Requirements:
  - Alpha (α): Blocked by a sheet of paper or outer dead skin layer.
  - Beta (β): Stopped by a few millimeters of aluminum or plastic.
  - Gamma (γ) and X-rays: Require thick lead plates or dense meters of concrete.
• Three Golden Rules of Radiation Safety:
  1. Minimize Time of exposure.
  2. Maximize Distance from source (Intensity follows inverse square law: I ∝ 1 / d²).
  3. Utilize effective Shielding.

---

7.4 Physics in Archeology: Radiocarbon Dating 🏺
Introduced by Willard Libby in 1950 (Nobel Prize 1960).
• Formation: Cosmic ray neutrons collide with atmospheric Nitrogen-14 to form Carbon-14:
  ¹⁴N + n ➔ ¹⁴C + p
• Principle: Living organisms ingest ¹⁴C through photosynthesis and the food chain in equilibrium with atmospheric levels. Upon death, ¹⁴C intake stops, and it decays into ¹⁴N by beta decay:
  ¹⁴C ➔ ¹⁴N + β⁻ + ν_bar
• Decay Equation:
  N(t) = N0 · e^(-λt)
  Radiocarbon Age: t = - (1 / λ) · ln(N / N0)
  where half-life t_1/2 = 5,730 ± 40 years (effective for organic artifacts up to 50,000 years old).

---

7.5 Physics in Space, Communication & Power Generation 🛰️
• Seismic Sensors (Seismometers): Measure inertial ground displacement from seismic waves to probe Earth's interior and detect earthquakes.
• Radio & Satellite Propagation:
  - Ground / Surface Waves (< 3 MHz): Follow Earth's curvature (AM radio).
  - Sky Waves (3 - 30 MHz): Reflected by ionospheric plasma layers back to Earth.
  - Space Waves (> 30 MHz): Line-of-sight propagation (FM radio, TV, cellular, satellite GPS).
• Energy & Power Generation Technologies:
  - Hydroelectric Power: Converts gravitational potential energy of dammed water into electricity via penstocks and turbine generators:
    Power = η · ρ · g · Q · H
  - Solar Energy: Photovoltaic effect converting solar photon flux directly into electric current.
  - Wind Energy: Harnessing kinetic energy of atmospheric air currents using aerodynamic wind turbine blades.
  - Geothermal Energy: Extracting high-temperature steam from volcanic geothermal hotspots to power electric steam turbines.`
  }
];
