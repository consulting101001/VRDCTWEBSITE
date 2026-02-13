
import { PracticeArea } from './types';

export const LEGAL_SERVICES: PracticeArea[] = [
  // --- LITIGATION & DISPUTES ---
  {
    id: 'criminal-law',
    title: 'Criminal Law',
    description: 'Expert defense and advocacy in criminal proceedings, ensuring protection of rights and procedural integrity.',
    longDescription: 'Our criminal law department provides robust representation across all stages of criminal litigation. We specialize in complex white-collar crimes, regulatory offenses, and general criminal defense within the UAE jurisdiction.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    features: ['Defense Advocacy', 'Bail Applications', 'Appeals', 'Police Station Representation']
  },
  {
    id: 'labour-cases',
    title: 'Labour & Employment',
    description: 'Resolving workplace conflicts and ensuring compliance with the latest UAE Labour Laws.',
    longDescription: 'We represent both employers and employees in disputes involving wrongful termination, compensation claims, and contractual breaches. Our expertise ensures adherence to the evolving Ministry of Human Resources and Emiratisation (MOHRE) regulations.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=1200',
    features: ['Wrongful Dismissal', 'Gratuity Claims', 'Employment Contracts', 'Non-Compete Clauses']
  },
  {
    id: 'rental-disputes',
    title: 'Rental & Tenancy',
    description: 'Navigating the complexities of real estate leasing and RDC tribunal proceedings.',
    longDescription: 'Specialized counsel for landlord and tenant disputes. We handle cases within the Rental Dispute Center (RDC), focusing on eviction notices, rent increases, and maintenance obligations.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
    features: ['Eviction Strategy', 'Rent Committee Filings', 'Lease Audits', 'Deposit Recovery']
  },
  {
    id: 'civil-cases',
    title: 'Civil & Insurance',
    description: 'Comprehensive civil litigation including complex Insurance Claim cases.',
    longDescription: 'Our civil litigation team handles a broad spectrum of disputes, from personal injury and negligence to high-value insurance claims. We ensure our clients receive maximum entitlement under UAE civil code.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
    features: ['Insurance Recovery', 'Tort & Liability', 'Damage Assessment', 'Subrogation Claims']
  },
  {
    id: 'commercial-partnership',
    title: 'Commercial & Partnership',
    description: 'Resolving intricate corporate conflicts and partnership disagreements.',
    longDescription: 'We provide tactical solutions for commercial disputes, including shareholder conflicts and partnership liquidations. Our focus is on protecting business continuity and asset value.',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    image: 'https://images.unsplash.com/photo-1507679799987-c7377bc56509?auto=format&fit=crop&q=80&w=1200',
    features: ['Shareholder Rights', 'Joint Venture Disputes', 'Trade Secrets', 'Agency Agreements']
  },
  {
    id: 'real-estate-litigation',
    title: 'Real Estate Law',
    description: 'Expertise in property acquisition, development disputes, and title issues.',
    longDescription: 'Comprehensive legal support for the UAE property market. We assist developers, investors, and owners with title transfers, construction delays, and off-plan property disputes.',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 11V9',
    image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80&w=1200',
    features: ['Off-Plan Disputes', 'Title Registration', 'Developer Liaison', 'Escrow Management']
  },

  // --- FAMILY & PRIVATE CLIENT ---
  {
    id: 'family-mutual',
    title: 'Family: Mutual Settlement',
    description: 'Facilitating amicable and confidential family law resolutions.',
    longDescription: 'We guide families through the process of mutual settlements, focusing on privacy and the well-being of all parties involved. We specialize in drafting comprehensive settlement agreements that are recognized by UAE courts.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200',
    features: ['Consensual Divorce', 'Asset Division', 'Custody Arrangements', 'Maintenance Agreements']
  },
  {
    id: 'family-dispute',
    title: 'Family: Dispute Litigation',
    description: 'Strong advocacy in contested family matters and marital disputes.',
    longDescription: 'When mutual agreement is not possible, our family law litigators provide resolute representation in court. We handle contested divorces, alimony claims, and guardianship proceedings with the highest sensitivity.',
    icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    image: 'https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&q=80&w=1200',
    features: ['Contested Divorce', 'Alimony Defense', 'Guardianship', 'Child Abduction Matters']
  },
  {
    id: 'inheritance-cases',
    title: 'Family: Inheritance',
    description: 'Expert guidance on Sharia and Non-Sharia inheritance distribution.',
    longDescription: 'We manage complex inheritance cases, including the distribution of assets among heirs. We provide clarity on the application of Sharia law and the execution of international probate orders in the UAE.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.246 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    image: 'https://images.unsplash.com/photo-1589210339058-df3750047f28?auto=format&fit=crop&q=80&w=1200',
    features: ['Heir Identification', 'Asset Liquidation', 'Probate Execution', 'Trust Management']
  },

  // --- CORPORATE & ADVISORY ---
  {
    id: 'agreement-drafting',
    title: 'Drafting & Review',
    description: 'Meticulous drafting of Agreements, MOU, and MOA for all business ventures.',
    longDescription: 'Precision in documentation is the first line of defense. We draft and review all forms of commercial contracts, including Memorandums of Understanding (MOU) and Articles of Association (MOA), ensuring maximum legal protection.',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
    features: ['MOU/MOA Drafting', 'Service Agreements', 'NDA Preparation', 'Policy Review']
  },
  {
    id: 'debt-collection',
    title: 'Debt Collection',
    description: 'Strategic recovery of outstanding debts and commercial receivables.',
    longDescription: 'Our debt recovery department uses a combination of formal legal notices and tactical litigation to recover outstanding payments. We handle both individual and large-scale corporate debt portfolios.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    image: 'https://images.unsplash.com/photo-1611974714851-eb6053e62359?auto=format&fit=crop&q=80&w=1200',
    features: ['Formal Demands', 'Payment Tracking', 'Court Execution', 'Asset Seizure Requests']
  },
  {
    id: 'will-drafting',
    title: 'WILL Drafting',
    description: 'Specialized WILL registration for Dubai Courts and DIFC jurisdictions.',
    longDescription: 'Secure your legacy with professionally drafted and registered WILLs. We provide specialized support for registration through Dubai Courts and the DIFC Wills Service Centre for non-Muslims.',
    icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200',
    features: ['DIFC Registration', 'Dubai Courts WILLs', 'Guardianship Clauses', 'Asset Schedules']
  },
  {
    id: 'poa-spa-drafting',
    title: 'POA & SPA Drafting',
    description: 'Registration of Power of Attorney and Special Power of Attorney.',
    longDescription: 'We facilitate the drafting and notarization of Power of Attorney (POA) and Special Power of Attorney (SPA) for real estate transactions, business management, and representation.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1200',
    features: ['General POA', 'Specific Asset SPA', 'Notarization Support', 'Revocation Services']
  },

  // --- SPECIALIZED PROCEDURES ---
  {
    id: 'cheque-bounce',
    title: 'Cheque Bounce Execution',
    description: 'Expedited legal action for dishonored cheques and payment orders.',
    longDescription: 'With the changes in UAE law, we provide expedited execution procedures for dishonored cheques. We assist in filing for Performance Orders to recover funds without lengthy litigation.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=1200',
    features: ['Performance Orders', 'Criminal Complaints', 'Civil Recovery', 'Settlement Negotiation']
  },
  {
    id: 'diac-arbitration',
    title: 'DIAC & Arbitration',
    description: 'Elite representation in DIAC and international arbitration tribunals.',
    longDescription: 'We represent clients in high-stakes arbitration cases at the Dubai International Arbitration Centre (DIAC) and other global tribunals, focusing on swift and enforceable awards.',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    image: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&q=80&w=1200',
    features: ['Award Enforcement', 'Arbitrator Selection', 'Expert Testimony', 'Conciliation']
  },
  {
    id: 'difc-cases',
    title: 'DIFC & Overseas Judgments',
    description: 'Litigation in DIFC Courts and execution of overseas judgments in UAE.',
    longDescription: 'Specialized counsel for the English-language common law courts of the DIFC. We also specialize in the complex process of recognizing and executing international court judgments within the UAE.',
    icon: 'M12 21V3m9 6l-9 12L3 9h18z',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    features: ['DIFC Small Claims', 'Judgment Recognition', 'Cross-Border Execution', 'Common Law Advocacy']
  },
  {
    id: 'administrative-cases',
    title: 'Administrative Law',
    description: 'Representation for Government Employees and administrative appeals.',
    longDescription: 'We provide specialized legal support for public sector employees in administrative disputes, disciplinary actions, and appeals against governmental decisions.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
    features: ['Public Service Grievances', 'Disciplinary Appeals', 'Judicial Review', 'Regulatory Liaison']
  },
  {
    id: 'immigration-due-diligence',
    title: 'Immigration & Investigation',
    description: 'Strategic counsel on Immigration Cases and Legal Due Diligence.',
    longDescription: 'We provide comprehensive support for residency, Golden Visas, and complex immigration challenges. Additionally, we conduct deep-dive legal due diligence for mergers, acquisitions, and private investments.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200',
    features: ['Golden Visa Strategy', 'Entity Verification', 'Asset Investigation', 'Compliance Audits']
  },
  {
    id: 'legal-opinion',
    title: 'Legal Opinion',
    description: 'Authoritative and confidential legal analysis for complex matters.',
    longDescription: 'Our senior partners provide formal, written Legal Opinions that serve as the foundation for high-stakes business decisions and court proceedings. Each opinion is backed by rigorous case law research.',
    icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200',
    features: ['Strategic Briefings', 'Risk Mitigation', 'Expert Counsel', 'Judicial Forecasting']
  }
];

export const LAWYER_EXPERTISE = LEGAL_SERVICES.slice(0, 6); // Keep top 6 for the expertise highlights
export const PRACTICE_AREAS = LEGAL_SERVICES;
