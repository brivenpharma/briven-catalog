export type ProductCategory =
  | "Pain & Inflammation"
  | "Gastrointestinal"
  | "Antibiotics"
  | "Neuropathic Care"
  | "Nutritional Supplements";

export type DosageForm = "Tablet" | "Capsule" | "Powder";

export type PrescriptionType = "Rx" | "OTC";

export interface TherapeuticUse {
  focus: string;
  primaryCondition: string;
  clinicalSummary: string;
}

export interface SpecificationItem {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  categoryEyebrow: string;
  compositionSummary: string;
  presentationSummary: string;
  category: ProductCategory;
  dosageForm: DosageForm;
  prescriptionType: PrescriptionType;
  mrp: number;
  sellingPrice: number;
  discount: number;
  packSize: string;
  manufacturer: string;
  image: string;
  inStock: boolean;
  // Compatibility fields
  composition: string;
  shortDescription: string;
  uses: string[];
  sideEffects: string[];
  // Editorial Catalogue fields
  therapeuticUse: TherapeuticUse;
  specifications: SpecificationItem[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Naprovin-D",
    slug: "naprovin-d",
    categoryEyebrow: "PAIN MANAGEMENT · NSAID + PROKINETIC",
    compositionSummary: "Naproxen Sodium 500 mg + Domperidone 10 mg",
    presentationSummary: "Film-coated bilayer tablets · 10 × 10 tablets per box",
    category: "Pain & Inflammation",
    dosageForm: "Tablet",
    prescriptionType: "Rx",
    mrp: 220,
    sellingPrice: 185,
    discount: 16,
    packSize: "10 × 10 Tablets (100 Tablets)",
    manufacturer: "Tanishka Pharmaceuticals Pvt. Ltd. · Marketed by Briven Pharmaceutical",
    image: "/images/products/naprovin-d.png",
    inStock: true,
    composition: "Naproxen Sodium BP 500 mg + Domperidone Maleate IP eq. to Domperidone 10 mg",
    shortDescription:
      "Fast relief from joint pain, arthritis, and swelling with built-in protection against stomach acidity and nausea.",
    uses: [
      "Joint pain and stiffness",
      "Knee, hip & back arthritis",
      "Muscle sprains and body ache",
      "Pain with acid sensitivity",
    ],
    sideEffects: ["Mild nausea", "Indigestion (infrequent)"],
    therapeuticUse: {
      focus: "Pain & Inflammation",
      primaryCondition: "Joint Pain, Arthritis & Musculoskeletal Sprains",
      clinicalSummary:
        "Naprovin-D combines a strong pain reliever (Naproxen) with an anti-acidity agent (Domperidone). It quickly calms inflamed joints and eases stiffness, while actively shielding the stomach to prevent the burning, nausea, and discomfort common with pain tablets.",
    },
    specifications: [
      { label: "Generic composition", value: "Naproxen Sodium BP 500 mg + Domperidone Maleate IP eq. to Domperidone 10 mg" },
      { label: "Dosage form", value: "Film-coated bilayer tablet" },
      { label: "Packaging / Packing", value: "10 × 10 Alu-Alu blister pack (100 Tablets per box)" },
      { label: "Therapeutic category", value: "Pain Management (NSAID + Prokinetic)" },
      { label: "Regulatory classification", value: "Schedule H prescription drug (Rx only)" },
      { label: "Quality standard", value: "WHO-GMP compliant manufacturing" },
      { label: "Storage", value: "Below 25°C, dry place, protected from direct sunlight" },
      { label: "Shelf life", value: "24 months from manufacturing date" },
      { label: "Manufacturer", value: "Tanishka Pharmaceuticals Pvt. Ltd." },
      { label: "Marketing company", value: "Briven Pharmaceutical" },
    ],
  },
  {
    id: 2,
    name: "Etolap-400",
    slug: "etolap-400",
    categoryEyebrow: "PAIN MANAGEMENT · PREFERENTIAL COX-2 NSAID",
    compositionSummary: "Etodolac Tablets IP 400 mg",
    presentationSummary: "Film-coated tablets · 10 × 10 tablets per box",
    category: "Pain & Inflammation",
    dosageForm: "Tablet",
    prescriptionType: "Rx",
    mrp: 175,
    sellingPrice: 145,
    discount: 17,
    packSize: "10 × 10 Tablets (100 Tablets)",
    manufacturer: "Tanishka Pharmaceuticals Pvt. Ltd. · Marketed by Briven Pharmaceutical",
    image: "/images/products/etolap-400.png",
    inStock: true,
    composition: "Etodolac IP 400 mg",
    shortDescription:
      "Targeted daily pain relief for arthritis and joint stiffness that is gentle on the stomach.",
    uses: [
      "Osteoarthritis pain",
      "Morning joint stiffness",
      "Shoulder, knee & hip discomfort",
      "Muscle and ligament strains",
    ],
    sideEffects: ["Mild epigastric discomfort"],
    therapeuticUse: {
      focus: "Pain & Inflammation",
      primaryCondition: "Osteoarthritis, Joint Stiffness & Soft-Tissue Pain",
      clinicalSummary:
        "Etolap-400 provides long-lasting 24-hour relief from joint inflammation and morning stiffness. It is specially designed to relieve pain effectively while significantly reducing the risk of stomach irritation and ulcers compared to regular painkillers.",
    },
    specifications: [
      { label: "Generic composition", value: "Etodolac IP 400 mg" },
      { label: "Dosage form", value: "Film-coated tablet" },
      { label: "Packaging / Packing", value: "10 × 10 Alu-Alu blister pack (100 Tablets per box)" },
      { label: "Therapeutic category", value: "Pain Management (Preferential COX-2 NSAID)" },
      { label: "Regulatory classification", value: "Schedule H prescription drug (Rx only)" },
      { label: "Quality standard", value: "WHO-GMP compliant manufacturing" },
      { label: "Storage", value: "Below 25°C, dry place, protected from moisture and light" },
      { label: "Shelf life", value: "24 months from manufacturing date" },
      { label: "Manufacturer", value: "Tanishka Pharmaceuticals Pvt. Ltd." },
      { label: "Marketing company", value: "Briven Pharmaceutical" },
    ],
  },
  {
    id: 3,
    name: "Ecidom-40",
    slug: "ecidom-40",
    categoryEyebrow: "GASTROENTEROLOGY · PROTON PUMP INHIBITOR",
    compositionSummary: "Esomeprazole Gastro-Resistant Tablets IP 40 mg",
    presentationSummary: "Gastro-resistant enteric-coated tablets · 10 × 10 tablets per box",
    category: "Gastrointestinal",
    dosageForm: "Tablet",
    prescriptionType: "Rx",
    mrp: 185,
    sellingPrice: 155,
    discount: 16,
    packSize: "10 × 10 Tablets (100 Tablets)",
    manufacturer: "Tanishka Pharmaceuticals Pvt. Ltd. · Marketed by Briven Pharmaceutical",
    image: "/images/products/ecidom-40.png",
    inStock: true,
    composition: "Esomeprazole Magnesium Trihydrate IP eq. to Esomeprazole 40 mg",
    shortDescription:
      "All-day relief from acid reflux, severe heartburn, and stomach irritation.",
    uses: [
      "Acid reflux and chest burning",
      "Persistent heartburn",
      "Stomach and food-pipe ulcers",
      "Stomach protection during medication",
    ],
    sideEffects: ["Mild headache", "Mild abdominal fullness"],
    therapeuticUse: {
      focus: "Gastrointestinal",
      primaryCondition: "Acid Reflux, Heartburn & Stomach Ulcer Healing",
      clinicalSummary:
        "Ecidom-40 stops excess stomach acid production at the root. A single daily dose keeps acid low throughout the day and night, allowing painful irritation to heal and preventing heartburn from returning.",
    },
    specifications: [
      { label: "Generic composition", value: "Esomeprazole Magnesium Trihydrate IP eq. to Esomeprazole 40 mg" },
      { label: "Dosage form", value: "Gastro-resistant enteric-coated tablet" },
      { label: "Packaging / Packing", value: "10 × 10 Alu-Alu blister pack (100 Tablets per box)" },
      { label: "Therapeutic category", value: "Gastrointestinal (Proton Pump Inhibitor)" },
      { label: "Regulatory classification", value: "Schedule H prescription drug (Rx only)" },
      { label: "Quality standard", value: "WHO-GMP compliant manufacturing" },
      { label: "Storage", value: "Below 25°C, dry place, protected from moisture and light" },
      { label: "Shelf life", value: "24 months from manufacturing date" },
      { label: "Manufacturer", value: "Tanishka Pharmaceuticals Pvt. Ltd." },
      { label: "Marketing company", value: "Briven Pharmaceutical" },
    ],
  },
  {
    id: 4,
    name: "Ecidom-D Fast",
    slug: "ecidom-d-fast",
    categoryEyebrow: "GASTROENTEROLOGY · PPI + PROKINETIC",
    compositionSummary: "Esomeprazole 40 mg (EC) + Domperidone 30 mg (SR)",
    presentationSummary: "Dual-pellet hard gelatin capsules · 10 × 10 capsules per box",
    category: "Gastrointestinal",
    dosageForm: "Capsule",
    prescriptionType: "Rx",
    mrp: 255,
    sellingPrice: 210,
    discount: 18,
    packSize: "10 × 10 Capsules (100 Capsules)",
    manufacturer: "Tanishka Pharmaceuticals Pvt. Ltd. · Marketed by Briven Pharmaceutical",
    image: "/images/products/ecidom-d-fast.png",
    inStock: true,
    composition: "Esomeprazole Magnesium IP 40 mg (EC) + Domperidone IP 30 mg (SR)",
    shortDescription:
      "Relieves heavy acid reflux accompanied by bloating, gas, and nausea after meals.",
    uses: [
      "Acid reflux & food regurgitation",
      "Heavy bloating & fullness after meals",
      "Nausea caused by acidity",
      "Sluggish digestion",
    ],
    sideEffects: ["Dry mouth", "Mild headache"],
    therapeuticUse: {
      focus: "Gastrointestinal",
      primaryCondition: "Acid Reflux, Bloating & Indigestion",
      clinicalSummary:
        "Ecidom-D Fast treats both acid and poor digestion together. It stops excess acid from burning the stomach and helps food move naturally through the digestive system, relieving that heavy bloated feeling, gas, and sour burps.",
    },
    specifications: [
      { label: "Generic composition", value: "Esomeprazole Magnesium IP 40 mg (EC) + Domperidone IP 30 mg (SR)" },
      { label: "Dosage form", value: "Dual-pellet hard gelatin capsule" },
      { label: "Packaging / Packing", value: "10 × 10 Alu-Alu blister pack (100 Capsules per box)" },
      { label: "Therapeutic category", value: "Gastrointestinal (PPI + Prokinetic)" },
      { label: "Regulatory classification", value: "Schedule H prescription drug (Rx only)" },
      { label: "Quality standard", value: "WHO-GMP compliant manufacturing" },
      { label: "Storage", value: "Below 25°C, dry place, protected from direct sunlight" },
      { label: "Shelf life", value: "24 months from manufacturing date" },
      { label: "Manufacturer", value: "Tanishka Pharmaceuticals Pvt. Ltd." },
      { label: "Marketing company", value: "Briven Pharmaceutical" },
    ],
  },
  {
    id: 5,
    name: "Brivrab-ISR",
    slug: "brivrab-isr",
    categoryEyebrow: "GASTROENTEROLOGY · PPI + PROKINETIC",
    compositionSummary: "Rabeprazole Sodium 20 mg (EC) + Domperidone 30 mg (SR)",
    presentationSummary: "Dual-pellet capsules · 10 × 10 capsules per box",
    category: "Gastrointestinal",
    dosageForm: "Capsule",
    prescriptionType: "Rx",
    mrp: 240,
    sellingPrice: 195,
    discount: 19,
    packSize: "10 × 10 Capsules (100 Capsules)",
    manufacturer: "Tanishka Pharmaceuticals Pvt. Ltd. · Marketed by Briven Pharmaceutical",
    image: "/images/products/brivrab-isr.png",
    inStock: true,
    composition: "Rabeprazole Sodium IP 20 mg (EC) + Domperidone IP 30 mg (SR)",
    shortDescription:
      "Rapid-acting control for acid reflux, sour taste in mouth, and night-time heartburn.",
    uses: [
      "Night-time heartburn & acid rising",
      "Acid reflux and sour burping",
      "Indigestion and stomach fullness",
    ],
    sideEffects: ["Mild headache", "Temporary gas"],
    therapeuticUse: {
      focus: "Gastrointestinal",
      primaryCondition: "Night-Time Heartburn, Acid Reflux & Dyspepsia",
      clinicalSummary:
        "Brivrab-ISR starts working within the first hour to neutralize stomach acid. Its sustained-release action keeps working through the night to prevent acid from rising into the throat when lying down, helping patients sleep comfortably without burning.",
    },
    specifications: [
      { label: "Generic composition", value: "Rabeprazole Sodium IP 20 mg (EC) + Domperidone IP 30 mg (SR)" },
      { label: "Dosage form", value: "Hard gelatin capsule (EC + SR pellets)" },
      { label: "Packaging / Packing", value: "10 × 10 Alu-Alu blister pack (100 Capsules per box)" },
      { label: "Therapeutic category", value: "Gastrointestinal (Fast PPI + Prokinetic)" },
      { label: "Regulatory classification", value: "Schedule H prescription drug (Rx only)" },
      { label: "Quality standard", value: "WHO-GMP compliant manufacturing" },
      { label: "Storage", value: "Below 25°C, dry place, protected from moisture and light" },
      { label: "Shelf life", value: "24 months from manufacturing date" },
      { label: "Manufacturer", value: "Tanishka Pharmaceuticals Pvt. Ltd." },
      { label: "Marketing company", value: "Briven Pharmaceutical" },
    ],
  },
  {
    id: 6,
    name: "Brivacef-500",
    slug: "brivacef-500",
    categoryEyebrow: "ANTI-INFECTIVES · 2ND GENERATION CEPHALOSPORIN",
    compositionSummary: "Cefuroxime Axetil Tablets IP 500 mg",
    presentationSummary: "Film-coated tablets · 10 × 10 tablets per box",
    category: "Antibiotics",
    dosageForm: "Tablet",
    prescriptionType: "Rx",
    mrp: 295,
    sellingPrice: 245,
    discount: 17,
    packSize: "10 × 10 Tablets (100 Tablets)",
    manufacturer: "Tanishka Pharmaceuticals Pvt. Ltd. · Marketed by Briven Pharmaceutical",
    image: "/images/products/brivacef-500.png",
    inStock: true,
    composition: "Cefuroxime Axetil IP eq. to Cefuroxime 500 mg",
    shortDescription:
      "Reliable antibiotic for chest infections, throat pain, sinusitis, and urinary tract infections.",
    uses: [
      "Chest and lung infections (bronchitis)",
      "Severe throat infection & tonsillitis",
      "Sinus and ear infections",
      "Urinary tract infections (UTI)",
    ],
    sideEffects: ["Mild stomach upset", "Nausea"],
    therapeuticUse: {
      focus: "Anti-Infectives",
      primaryCondition: "Bacterial Infections of Throat, Chest & Urinary Tract",
      clinicalSummary:
        "Brivacef-500 is a powerful antibiotic that kills harmful bacteria causing infections in the lungs, throat, ears, and urinary tract. It stops bacteria from multiplying, helping clear stubborn infections and speed up recovery.",
    },
    specifications: [
      { label: "Generic composition", value: "Cefuroxime Axetil IP eq. to Cefuroxime 500 mg" },
      { label: "Dosage form", value: "Film-coated tablet" },
      { label: "Packaging / Packing", value: "10 × 10 Alu-Alu blister pack (100 Tablets per box)" },
      { label: "Therapeutic category", value: "Anti-Infective (2nd Gen Cephalosporin)" },
      { label: "Regulatory classification", value: "Schedule H1 prescription drug (Rx required)" },
      { label: "Quality standard", value: "WHO-GMP compliant manufacturing" },
      { label: "Storage", value: "Below 25°C, dry place, protected from light and moisture" },
      { label: "Shelf life", value: "24 months from manufacturing date" },
      { label: "Manufacturer", value: "Tanishka Pharmaceuticals Pvt. Ltd." },
      { label: "Marketing company", value: "Briven Pharmaceutical" },
    ],
  },
  {
    id: 7,
    name: "Preganex-M",
    slug: "preganex-m",
    categoryEyebrow: "NEUROLOGY & PAIN · CALCIUM CHANNEL MODULATOR + B12",
    compositionSummary: "Pregabalin 75 mg + Methylcobalamin 750 mcg",
    presentationSummary: "Hard gelatin capsules · 10 × 10 capsules per box",
    category: "Neuropathic Care",
    dosageForm: "Capsule",
    prescriptionType: "Rx",
    mrp: 310,
    sellingPrice: 265,
    discount: 15,
    packSize: "10 × 10 Capsules (100 Capsules)",
    manufacturer: "Tanishka Pharmaceuticals Pvt. Ltd. · Marketed by Briven Pharmaceutical",
    image: "/images/products/preganex-m.png",
    inStock: true,
    composition: "Pregabalin IP 75 mg + Methylcobalamin IP 750 mcg",
    shortDescription:
      "Soothes burning, tingling nerve pain and helps repair damaged nerves with Vitamin B12.",
    uses: [
      "Diabetic nerve pain (burning/tingling feet)",
      "Sciatica and shooting back pain",
      "Numbness and weakness in hands or feet",
      "Post-shingles nerve pain",
    ],
    sideEffects: ["Mild drowsiness", "Dizziness initially", "Dry mouth"],
    therapeuticUse: {
      focus: "Neuropathic Care",
      primaryCondition: "Nerve Pain, Burning Feet & Sciatica",
      clinicalSummary:
        "Preganex-M is specially formulated for irritated and damaged nerves. Pregabalin calms oversensitive pain signals to relieve burning and shooting sensations, while active Vitamin B12 (Methylcobalamin) nourishes nerve fibers and helps restore healthy feeling.",
    },
    specifications: [
      { label: "Generic composition", value: "Pregabalin IP 75 mg + Methylcobalamin IP 750 mcg" },
      { label: "Dosage form", value: "Hard gelatin capsule" },
      { label: "Packaging / Packing", value: "10 × 10 Alu-Alu blister pack (100 Capsules per box)" },
      { label: "Therapeutic category", value: "Neuropathic Care (GABA Analogue + Bioactive B12)" },
      { label: "Regulatory classification", value: "Schedule H prescription drug (Rx only)" },
      { label: "Quality standard", value: "WHO-GMP compliant manufacturing" },
      { label: "Storage", value: "Below 25°C, cool and dry place, protected from moisture" },
      { label: "Shelf life", value: "24 months from manufacturing date" },
      { label: "Manufacturer", value: "Tanishka Pharmaceuticals Pvt. Ltd." },
      { label: "Marketing company", value: "Briven Pharmaceutical" },
    ],
  },
  {
    id: 8,
    name: "Pregacare-NT",
    slug: "pregacare-nt",
    categoryEyebrow: "NEUROLOGY & PAIN · DUAL NEUROMODULATOR",
    compositionSummary: "Pregabalin 75 mg + Nortriptyline 10 mg",
    presentationSummary: "Film-coated tablets · 10 × 10 tablets per box",
    category: "Neuropathic Care",
    dosageForm: "Tablet",
    prescriptionType: "Rx",
    mrp: 280,
    sellingPrice: 235,
    discount: 16,
    packSize: "10 × 10 Tablets (100 Tablets)",
    manufacturer: "Tanishka Pharmaceuticals Pvt. Ltd. · Marketed by Briven Pharmaceutical",
    image: "/images/products/pregacare-nt.png",
    inStock: true,
    composition: "Pregabalin IP 75 mg + Nortriptyline Hydrochloride IP eq. to Nortriptyline 10 mg",
    shortDescription:
      "Dual-action relief for chronic nerve pain and the sleep disturbance it causes.",
    uses: [
      "Severe chronic nerve aches",
      "Nerve pain keeping you awake",
      "Persistent burning & pins-and-needles",
      "Radiating lower-back nerve pain",
    ],
    sideEffects: ["Dry mouth", "Mild drowsiness", "Constipation"],
    therapeuticUse: {
      focus: "Neuropathic Care",
      primaryCondition: "Severe Nerve Pain & Pain-Related Sleep Disruption",
      clinicalSummary:
        "Pregacare-NT targets severe nerve pain that doesn't respond to ordinary painkillers. It reduces pain signals traveling to the brain while gently relaxing the nervous system, helping patients get comfortable, undisturbed sleep throughout the night.",
    },
    specifications: [
      { label: "Generic composition", value: "Pregabalin IP 75 mg + Nortriptyline Hydrochloride IP eq. to Nortriptyline 10 mg" },
      { label: "Dosage form", value: "Film-coated tablet" },
      { label: "Packaging / Packing", value: "10 × 10 Alu-Alu blister pack (100 Tablets per box)" },
      { label: "Therapeutic category", value: "Neuropathic Care (Dual Neuromodulator)" },
      { label: "Regulatory classification", value: "Schedule H prescription drug (Rx only)" },
      { label: "Quality standard", value: "WHO-GMP compliant manufacturing" },
      { label: "Storage", value: "Below 25°C, dry place, protected from moisture and light" },
      { label: "Shelf life", value: "24 months from manufacturing date" },
      { label: "Manufacturer", value: "Tanishka Pharmaceuticals Pvt. Ltd." },
      { label: "Marketing company", value: "Briven Pharmaceutical" },
    ],
  },
  {
    id: 9,
    name: "Brivamag-QC",
    slug: "brivamag-qc",
    categoryEyebrow: "NUTRITIONAL HEALTH · METABOLIC MICRONUTRIENT",
    compositionSummary: "Magnesium Bisglycinate + CoQ10 + L-Carnitine + Vitamin D3",
    presentationSummary: "Film-coated tablets · 10 × 10 tablets per box",
    category: "Nutritional Supplements",
    dosageForm: "Tablet",
    prescriptionType: "OTC",
    mrp: 465,
    sellingPrice: 395,
    discount: 15,
    packSize: "10 × 10 Tablets (100 Tablets)",
    manufacturer: "Marketed by Briven Pharmaceutical",
    image: "/images/products/brivamag-qc.png",
    inStock: true,
    composition: "Magnesium Bisglycinate + L-Carnitine L-Tartrate + Co-Enzyme Q10 + Vitamin D3",
    shortDescription:
      "Relieves night-time leg cramps, muscle twitches, and physical exhaustion with gentle magnesium.",
    uses: [
      "Painful night leg & calf cramps",
      "Muscle twitches and stiffness",
      "Daily physical fatigue & weakness",
      "Muscle support for statin medicine users",
    ],
    sideEffects: ["None reported at recommended dietary intake"],
    therapeuticUse: {
      focus: "Nutritional Health",
      primaryCondition: "Night Leg Cramps, Muscle Fatigue & Energy Support",
      clinicalSummary:
        "Brivamag-QC provides gentle, easily absorbed magnesium that relaxes tight, cramped muscles without upsetting the stomach. Enriched with CoQ10, L-Carnitine, and Vitamin D3, it restores muscle energy and stops painful night spasms.",
    },
    specifications: [
      { label: "Generic composition", value: "Magnesium Bisglycinate 250 mg + L-Carnitine L-Tartrate 500 mg + CoQ10 100 mg + Vitamin D3 1000 IU" },
      { label: "Dosage form", value: "Film-coated tablet" },
      { label: "Packaging / Packing", value: "10 × 10 Alu-Alu blister pack (100 Tablets per box)" },
      { label: "Therapeutic category", value: "Nutritional Supplement (Cardio-Metabolic Micronutrient)" },
      { label: "Regulatory classification", value: "Nutraceutical formulation (FSSAI approved)" },
      { label: "Quality standard", value: "FSSAI / WHO-GMP compliant standards" },
      { label: "Storage", value: "Below 25°C in a dry, dark place, protected from heat" },
      { label: "Shelf life", value: "18 months from manufacturing date" },
      { label: "Marketing company", value: "Briven Pharmaceutical" },
    ],
  },
  {
    id: 10,
    name: "Be-Nutri",
    slug: "be-nutri",
    categoryEyebrow: "CLINICAL NUTRITION · BALANCED WHEY PROTEIN + DHA",
    compositionSummary: "Whey Protein with DHA, MCT Oil & 28 Vitamins & Minerals",
    presentationSummary: "Clinical nutrition powder · 400 g hermetically sealed tin (French Vanilla flavour)",
    category: "Nutritional Supplements",
    dosageForm: "Powder",
    prescriptionType: "OTC",
    mrp: 575,
    sellingPrice: 485,
    discount: 16,
    packSize: "400 g Tin (Vanilla Flavour)",
    manufacturer: "P.S Nutritions, Mohali (PB) · Marketed by Briven Pharmaceutical",
    image: "/images/products/be-nutri.png",
    inStock: true,
    composition: "Protein Powder DHA With Whey Protein (Whey Protein, Maltodextrin, Skimmed Milk, MCT Oil, DHA, 28 Vitamins & Minerals)",
    shortDescription:
      "Complete daily nutritional protein drink with whey, DHA, and 28 essential vitamins and minerals.",
    uses: [
      "Recovery after illness or surgery",
      "Rebuilding muscle strength & vitality",
      "Daily nutrition and energy for adults",
      "Nutritional support for low appetite",
    ],
    sideEffects: ["None reported under standard dietary supplementation"],
    therapeuticUse: {
      focus: "Clinical Nutrition",
      primaryCondition: "Strength Recovery, Muscle Health & Daily Adult Nutrition",
      clinicalSummary:
        "Be-Nutri is a delicious French vanilla nutritional drink designed to rebuild strength, support immunity, and maintain muscle health. It contains easily digestible whey protein, brain-supporting DHA, and 28 essential vitamins and minerals for balanced daily health.",
    },
    specifications: [
      { label: "Generic composition", value: "Whey Protein Hydrolysate & Concentrate with DHA, MCT Oil & 28 Essential Vitamins and Minerals" },
      { label: "Dosage form", value: "Homogenized spray-dried clinical nutrition powder" },
      { label: "Packaging / Packing", value: "400 g hermetically sealed food-grade tin with measuring scoop" },
      { label: "Therapeutic category", value: "Clinical Nutrition (Balanced Protein + DHA)" },
      { label: "Regulatory classification", value: "Clinical nutritional supplement (FSSAI approved)" },
      { label: "Quality standard", value: "FSSAI / ISO 22000 certified manufacturing" },
      { label: "Storage", value: "Store in a cool, dry place. Close lid tightly after each use" },
      { label: "Shelf life", value: "18 months from manufacturing date" },
      { label: "Manufacturer", value: "P.S Nutritions, Mohali (PB)" },
      { label: "Marketing company", value: "Briven Pharmaceutical" },
    ],
  },
];

export const categories: { name: ProductCategory; count: number }[] = [
  { name: "Gastrointestinal", count: 3 },
  { name: "Pain & Inflammation", count: 2 },
  { name: "Antibiotics", count: 1 },
  { name: "Neuropathic Care", count: 2 },
  { name: "Nutritional Supplements", count: 2 },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
