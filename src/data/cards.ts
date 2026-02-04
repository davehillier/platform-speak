import { Card } from '@/types/game';

export const cards: Card[] = [
  // ============================================
  // CATEGORY 1: PLATFORM CORE (12 cards)
  // ============================================
  {
    id: 'data-fabric',
    term: 'Data Fabric',
    tabooWords: ['data', 'connect', 'virtual', 'migrate', 'copy'],
    category: 'platform-core',
    difficulty: 'hard',
    definition: {
      short: 'Appian capability that stitches together information from multiple systems for a 360-degree view without migration.',
      detailed: 'Data Fabric creates a unified, virtual model that links to existing systems in real time. It has three primary capabilities: Connect (pre-built connectors to databases, web services, ERP and CRM systems), Relate (defines relationships between information from different systems using a no-code interface), and Secure (applies record-level security automatically across the entire layer).',
      useCases: [
        'Unifying customer information across Salesforce and SAP',
        'Creating a 360-degree view of orders without ETL',
        'Real-time reporting across legacy systems',
      ],
      relatedTerms: ['Record Types', 'Connected Systems', 'Data Virtualisation'],
    },
  },
  {
    id: 'process-mining',
    term: 'Process Mining',
    tabooWords: ['process', 'analyse', 'bottleneck', 'AI'],
    category: 'platform-core',
    difficulty: 'medium',
    definition: {
      short: 'Appian capability for finding workflow inefficiencies with intelligent insights.',
      detailed: 'Process Mining analyses how business workflows are actually running and identifies patterns, slowdowns, and improvement opportunities. Connected to Process HQ, it uses intelligent analysis to provide automatic root-cause identification, KPI discovery, and actionable recommendations. Issues can be automatically escalated, workflows rerouted, or interventions triggered based on patterns.',
      useCases: [
        'Identifying why claims take longer than expected',
        'Finding manual steps that could be automated',
        'Discovering compliance violations in real-time',
      ],
      relatedTerms: ['Process HQ', 'Process Insights', 'Process Orchestration'],
    },
  },
  {
    id: 'low-code',
    term: 'Low-Code',
    tabooWords: ['code', 'visual', 'drag', 'drop', 'developer'],
    category: 'platform-core',
    difficulty: 'medium',
    definition: {
      short: 'Application development approach with minimal hand-writing through declarative interfaces.',
      detailed: 'Low-code enables rapid application building through point-and-click configuration rather than traditional programming. Appian Designer is the space where builders create, manage, deploy, and monitor applications. SAIL provides the declarative UI framework with pre-built components. Appian Composer uses AI to streamline planning and auto-generate application elements.',
      useCases: [
        'Rapidly prototyping new business applications',
        'Enabling citizen developers to build departmental tools',
        'Accelerating time-to-market for digital solutions',
      ],
      relatedTerms: ['SAIL', 'Appian Designer', 'Code Optional'],
    },
  },
  {
    id: 'sail',
    term: 'SAIL',
    tabooWords: ['interface', 'UI', 'design', 'component'],
    category: 'platform-core',
    difficulty: 'medium',
    definition: {
      short: 'Appian\'s declarative language for building user experiences with pre-built elements.',
      detailed: 'SAIL (Self-Assembling Interface Layer) is Appian\'s framework for creating responsive, enterprise-grade screens. It uses a declarative approach where you describe what you want rather than how to build it. SAIL automatically handles responsive layouts, accessibility, and styling. Components include forms, grids, charts, and rich text displays.',
      useCases: [
        'Building approval forms with validation',
        'Creating dashboards with real-time metrics',
        'Designing mobile-responsive task screens',
      ],
      relatedTerms: ['Low-Code', 'Appian Designer', 'Portals'],
    },
  },
  {
    id: 'record-types',
    term: 'Record Types',
    tabooWords: ['database', 'entity', 'table', 'field'],
    category: 'platform-core',
    difficulty: 'medium',
    definition: {
      short: 'Design objects that define the structure and behaviour of business subjects in Appian.',
      detailed: 'Record Types define a business subject (e.g., Customer, Order, Case) and its associated attributes, security, and actions. They connect to a source system and are the foundation of Appian\'s unified layer. Related record types can have relationships, creating a comprehensive information model. Row-level and attribute-level security is applied automatically.',
      useCases: [
        'Defining a Customer subject with linked Orders',
        'Setting up security so users only see their assigned cases',
        'Creating views for reporting and dashboards',
      ],
      relatedTerms: ['Data Fabric', 'Appian Records', 'Record-Level Security'],
    },
  },
  {
    id: 'expression-rules',
    term: 'Expression Rules',
    tabooWords: ['logic', 'function', 'reusable', 'calculation'],
    category: 'platform-core',
    difficulty: 'hard',
    definition: {
      short: 'Shareable, rule-based formulas written in Appian Expression Language that encapsulate business intelligence.',
      detailed: 'Expression Rules allow builders to write business intelligence once and share it across multiple screens, workflows, and integrations. Created using Appian Expression Language (AEL), a declarative, functional syntax. Common patterns include transformations, conditional decisions, aggregations, and security checks.',
      useCases: [
        'Calculating discount rates based on customer tier',
        'Validating form inputs against business requirements',
        'Filtering records based on user permissions',
      ],
      relatedTerms: ['SAIL', 'Record Types', 'Low-Code'],
    },
  },
  {
    id: 'connected-systems',
    term: 'Connected Systems',
    tabooWords: ['API', 'integration', 'credentials', 'external'],
    category: 'platform-core',
    difficulty: 'medium',
    definition: {
      short: 'Design objects that hold authentication details for interacting with outside services.',
      detailed: 'Connected Systems provide the mechanism for Appian to communicate with outside services and sources. A single connected system holds one set of authentication details. Pre-built connectors exist for common platforms (Salesforce, SAP, etc.). The Integration SDK allows extending with custom plug-ins. Credentials are never exposed in application configuration.',
      useCases: [
        'Connecting to Salesforce for CRM operations',
        'Integrating with SAP for financial transactions',
        'Calling REST endpoints for third-party services',
      ],
      relatedTerms: ['Data Fabric', 'Integration SDK', 'Record Types'],
    },
  },
  {
    id: 'appian-designer',
    term: 'Appian Designer',
    tabooWords: ['build', 'create', 'develop', 'application'],
    category: 'platform-core',
    difficulty: 'easy',
    definition: {
      short: 'The workspace where Appian solutions are configured, managed, deployed, and monitored.',
      detailed: 'Appian Designer is the central environment for all solution work. It provides access to all design objects (record types, rules, screens, workflows), deployment tools, monitoring dashboards, and administration settings. The environment supports collaboration between team members and includes version control integration.',
      useCases: [
        'Configuring new business solutions',
        'Managing existing solution components',
        'Deploying changes across environments',
      ],
      relatedTerms: ['Low-Code', 'Process Modeler', 'SAIL'],
    },
  },
  {
    id: 'process-modeler',
    term: 'Process Modeler',
    tabooWords: ['workflow', 'diagram', 'BPMN', 'model'],
    category: 'platform-core',
    difficulty: 'medium',
    definition: {
      short: 'The visual tool for designing and configuring business sequences in Appian.',
      detailed: 'Process Modeler is where business sequences are designed using a visual canvas. It supports industry-standard notation for representing activities, gateways, and events. Processes can include human tasks, system integrations, sub-processes, and exception handling. The modeler provides simulation and testing capabilities.',
      useCases: [
        'Designing approval chains with multiple reviewers',
        'Configuring exception handling for failed operations',
        'Building end-to-end customer onboarding journeys',
      ],
      relatedTerms: ['Process Orchestration', 'Appian Designer', 'Low-Code'],
    },
  },
  {
    id: 'appian-records',
    term: 'Appian Records',
    tabooWords: ['data', 'entity', 'instance', 'object'],
    category: 'platform-core',
    difficulty: 'medium',
    definition: {
      short: 'The individual items created from a Record Type definition.',
      detailed: 'Appian Records are the specific items that exist within a Record Type. For example, if "Customer" is the Record Type, then "Acme Corporation" would be an Appian Record. Records can have related records, actions, views, and security applied. They form the foundation of information management in Appian solutions.',
      useCases: [
        'Viewing a specific customer and their order history',
        'Taking actions on individual cases',
        'Drilling down into specific items from a dashboard',
      ],
      relatedTerms: ['Record Types', 'Data Fabric', 'Record-Level Security'],
    },
  },
  {
    id: 'record-level-security',
    term: 'Record-Level Security',
    tabooWords: ['permission', 'access', 'row', 'user'],
    category: 'platform-core',
    difficulty: 'hard',
    definition: {
      short: 'The capability to specify who can view which Appian Records based on rules.',
      detailed: 'Record-Level Security controls which specific items users can see within a Record Type. It includes row-level rules (e.g., "only see your assigned cases") and attribute-level rules (e.g., "hide salary from non-HR staff"). Security can be based on users found in attributes, meaning new items are automatically secured. Related Actions configured on records inherit this security.',
      useCases: [
        'Restricting case visibility to assigned team members',
        'Hiding sensitive financial attributes from certain roles',
        'Multi-tenant environments where each customer sees only their items',
      ],
      relatedTerms: ['Record Types', 'Appian Records', 'Appian Protect'],
    },
  },
  {
    id: 'portals',
    term: 'Portals',
    tabooWords: ['website', 'public', 'external', 'web'],
    category: 'platform-core',
    difficulty: 'easy',
    definition: {
      short: 'Appian capability to build customer-facing sites with the same tools used for internal applications.',
      detailed: 'Portals enable organisations to create sites for customers, partners, or citizens using Appian\'s configuration tools. They can include forms, status tracking, document uploads, and self-service capabilities. Portals integrate with the same backend processes and information as internal applications, ensuring consistency.',
      useCases: [
        'Customer self-service for status enquiries',
        'Partner submission forms for applications',
        'Citizen-facing government service requests',
      ],
      relatedTerms: ['SAIL', 'Low-Code', 'Appian Designer'],
    },
  },

  // ============================================
  // CATEGORY 2: AI & INTELLIGENCE (10 cards)
  // ============================================
  {
    id: 'private-ai',
    term: 'Private AI',
    tabooWords: ['secure', 'data', 'tenant', 'compliant'],
    category: 'ai-intelligence',
    difficulty: 'hard',
    definition: {
      short: 'Appian\'s architectural approach ensuring information used in intelligent services remains protected and meets regional regulations.',
      detailed: 'Private AI is Appian\'s commitment to respecting the security of information used in intelligent services. Information never leaves your environment when using AI capabilities. It complies with regional protection laws (GDPR, etc.). The architecture uses RAG (Retrieval Augmented Generation) that searches your internal knowledge base rather than relying on outside models.',
      useCases: [
        'Analysing confidential consultation responses',
        'Extracting entities from restricted documents',
        'Secure drafting of sensitive correspondence',
      ],
      relatedTerms: ['AI Copilot', 'DocCenter', 'Appian Protect'],
    },
  },
  {
    id: 'ai-copilot',
    term: 'AI Copilot',
    tabooWords: ['assistant', 'help', 'suggest', 'automate'],
    category: 'ai-intelligence',
    difficulty: 'medium',
    definition: {
      short: 'Intelligent companion letting all Appian users collaborate with AI to work more efficiently.',
      detailed: 'AI Copilot comes in two forms: for developers (PDF to screen conversion, node recommendations) and for business users (records chat, Process HQ). It provides contextual guidance based on what users are working on, accelerating both building and using Appian solutions.',
      useCases: [
        'Developers getting screen suggestions from PDF mockups',
        'Business users asking questions about their records',
        'Receiving workflow improvement recommendations',
      ],
      relatedTerms: ['Private AI', 'Records Chat', 'Agent Studio'],
    },
  },
  {
    id: 'agent-studio',
    term: 'Agent Studio',
    tabooWords: ['AI', 'agent', 'build', 'deploy'],
    category: 'ai-intelligence',
    difficulty: 'medium',
    definition: {
      short: 'Platform feature for quickly configuring and launching powerful autonomous workers with guided, point-and-click experience.',
      detailed: 'Agent Studio enables the creation of intelligent autonomous workers that can execute multi-step tasks. These workers can orchestrate across systems, make decisions based on context, and handle exceptions. The guided experience makes it accessible to non-technical users while providing power for complex scenarios.',
      useCases: [
        'Creating an autonomous worker for document triage',
        'Configuring a worker to handle routine enquiries',
        'Deploying workers that escalate complex cases',
      ],
      relatedTerms: ['AI Copilot', 'Private AI', 'Process Orchestration'],
    },
  },
  {
    id: 'doccenter',
    term: 'DocCenter',
    tabooWords: ['document', 'extract', 'classify', 'IDP'],
    category: 'ai-intelligence',
    difficulty: 'medium',
    definition: {
      short: 'Appian\'s offering that allows users of all skill levels to create and refine models for content categorisation and information retrieval.',
      detailed: 'DocCenter enables the processing of unstructured content using machine learning. Users can train models to categorise items and pull out specific information. The platform is designed for all skill levels, not just specialists. Models improve through feedback loops and can achieve high accuracy rates.',
      useCases: [
        'Categorising incoming correspondence by type',
        'Pulling information from W-9 forms',
        'Identifying key clauses in contracts',
      ],
      relatedTerms: ['Intelligent Document Processing', 'Document Intelligence', 'AI Skills'],
    },
  },
  {
    id: 'document-intelligence',
    term: 'Document Intelligence',
    tabooWords: ['scan', 'OCR', 'extract', 'automate'],
    category: 'ai-intelligence',
    difficulty: 'medium',
    definition: {
      short: 'Capability enabling 90% handling of unstructured content through intelligent processing.',
      detailed: 'Document Intelligence combines multiple AI capabilities to process paper and digital content at scale. It handles recognition, categorisation, information retrieval, and validation. The 90% figure represents the level of straight-through processing achievable for well-trained scenarios.',
      useCases: [
        'Processing invoices without manual review',
        'Handling claims submissions with attached evidence',
        'Automating mailroom operations',
      ],
      relatedTerms: ['DocCenter', 'Intelligent Document Processing', 'AI Copilot'],
    },
  },
  {
    id: 'ai-skills',
    term: 'AI Skills',
    tabooWords: ['model', 'train', 'machine', 'learning'],
    category: 'ai-intelligence',
    difficulty: 'hard',
    definition: {
      short: 'Design objects that enable configuring and refining intelligent capabilities using point-and-click tools.',
      detailed: 'AI Skills are design objects within Appian that package intelligent capabilities for use in applications. They can be configured and refined without specialist knowledge. Skills include classification, extraction, prediction, and sentiment analysis. They integrate seamlessly with other Appian components.',
      useCases: [
        'Predicting case resolution times',
        'Classifying customer feedback sentiment',
        'Identifying fraud patterns in transactions',
      ],
      relatedTerms: ['DocCenter', 'AI Copilot', 'Private AI'],
    },
  },
  {
    id: 'records-chat',
    term: 'Records Chat',
    tabooWords: ['chatbot', 'question', 'answer', 'conversation'],
    category: 'ai-intelligence',
    difficulty: 'easy',
    definition: {
      short: 'Component that adds a conversational companion to any Appian screen for enquiries about record information.',
      detailed: 'Records Chat enables natural language enquiries about information stored in Appian. Users can ask questions like "How many open cases do I have?" or "What orders were placed last week?" The component respects record-level security, so users only get results they\'re authorised to see.',
      useCases: [
        'Executives asking about departmental KPIs',
        'Service agents enquiring about customer history',
        'Managers checking team workload status',
      ],
      relatedTerms: ['AI Copilot', 'Record Types', 'Appian Records'],
    },
  },
  {
    id: 'process-insights',
    term: 'Process Insights',
    tabooWords: ['recommendation', 'improve', 'AI', 'analyse'],
    category: 'ai-intelligence',
    difficulty: 'medium',
    definition: {
      short: 'Intelligent observations into how workflows are running with suggestions for enhancement.',
      detailed: 'Process Insights uses intelligent analysis to provide observations about workflow performance. It identifies patterns, bottlenecks, and improvement opportunities. Suggestions are actionable and can be implemented directly. The capability is part of Process HQ.',
      useCases: [
        'Identifying steps that consistently cause delays',
        'Suggesting automation opportunities',
        'Flagging compliance risks in workflow execution',
      ],
      relatedTerms: ['Process Mining', 'Process HQ', 'AI Copilot'],
    },
  },
  {
    id: 'intelligent-document-processing',
    term: 'Intelligent Document Processing',
    tabooWords: ['document', 'scan', 'extract', 'AI'],
    category: 'ai-intelligence',
    difficulty: 'hard',
    definition: {
      short: 'The practice of using intelligent technologies to handle unstructured content at enterprise scale.',
      detailed: 'IDP combines multiple technologies (recognition, classification, extraction, validation) to process content that doesn\'t fit neatly into structured forms. Appian\'s IDP offering is DocCenter. The approach eliminates manual content handling and enables straight-through processing.',
      useCases: [
        'Processing insurance claims with multiple attachments',
        'Handling government applications with supporting evidence',
        'Automating invoice processing across formats',
      ],
      relatedTerms: ['DocCenter', 'Document Intelligence', 'AI Skills'],
    },
  },
  {
    id: 'data-fabric-insights',
    term: 'Data Fabric Insights',
    tabooWords: ['report', 'dashboard', 'visualise', 'data'],
    category: 'ai-intelligence',
    difficulty: 'medium',
    definition: {
      short: 'Intelligent observations into enterprise information with custom output building capabilities.',
      detailed: 'Data Fabric Insights combines the unified information layer with intelligent analysis. Users can ask questions about their information and get observations. Custom outputs can be created through natural language requests. The capability makes enterprise information accessible to non-technical users.',
      useCases: [
        'Creating ad-hoc analyses from unified information',
        'Asking business questions in natural language',
        'Building self-service outputs for departments',
      ],
      relatedTerms: ['Data Fabric', 'Records Chat', 'AI Copilot'],
    },
  },

  // ============================================
  // CATEGORY 3: STRATEGIC CONCEPTS (10 cards)
  // ============================================
  {
    id: 'clean-core',
    term: 'Clean Core',
    tabooWords: ['ERP', 'customisation', 'SAP', 'Oracle'],
    category: 'strategic-concepts',
    difficulty: 'hard',
    definition: {
      short: 'Strategic principle of keeping modifications out of backend systems by moving them to an orchestration wrapper.',
      detailed: 'Clean Core advocates for maintaining enterprise backend systems in their standard configuration. Instead of modifying these systems, customisations are built in an orchestration layer that wraps around them. This approach enables easier upgrades, reduces risk, and preserves vendor support.',
      useCases: [
        'Moving custom approval workflows out of the finance system',
        'Building user-friendly screens that wrap legacy terminals',
        'Creating unified experiences across multiple backends',
      ],
      relatedTerms: ['Agility Layer', 'Keep the Core Clean', 'Process Orchestration'],
    },
  },
  {
    id: 'agility-layer',
    term: 'Agility Layer',
    tabooWords: ['orchestration', 'wrapper', 'legacy', 'flexible'],
    category: 'strategic-concepts',
    difficulty: 'hard',
    definition: {
      short: 'A responsive coordination tier that sits above rigid backend systems.',
      detailed: 'The Agility Layer is an architectural pattern where a responsive platform coordinates work across multiple backend systems. It provides the ability to change quickly without modifying core systems. Users interact with the agility layer rather than directly with backends. Appian serves as this coordination tier.',
      useCases: [
        'Rapidly deploying new customer journeys',
        'Responding to regulatory changes without backend modifications',
        'Unifying experiences across departmental systems',
      ],
      relatedTerms: ['Clean Core', 'Process Orchestration', 'The Sentinel'],
    },
  },
  {
    id: 'process-orchestration',
    term: 'Process Orchestration',
    tabooWords: ['connect', 'automate', 'end-to-end', 'workflow'],
    category: 'strategic-concepts',
    difficulty: 'medium',
    definition: {
      short: 'Coordinating all elements of a business sequence (people, systems, bots, intelligence, rules, information) for complete visibility and control.',
      detailed: 'Process Orchestration goes beyond simple task sequencing to coordinate entire business journeys. It brings together human activities, system integrations, robotic workers, intelligent decisions, business rules, and information into a unified execution. Appian positions itself as the leader in this space.',
      useCases: [
        'End-to-end customer onboarding across departments',
        'Claims handling from submission to settlement',
        'Supply chain coordination across partners',
      ],
      relatedTerms: ['Process Mining', 'Agility Layer', 'Clean Core'],
    },
  },
  {
    id: 'swivel-chair',
    term: 'Swivel-Chair',
    tabooWords: ['manual', 'rekeying', 'copy', 'paste'],
    category: 'strategic-concepts',
    difficulty: 'medium',
    definition: {
      short: 'The inefficiency of workers constantly moving between disconnected systems to transfer information.',
      detailed: 'Swivel-Chair describes the wasteful pattern where employees must switch between multiple applications, reading from one and typing into another. This causes delays, errors, and frustration. The term evokes the image of someone literally swivelling their chair between screens. Orchestration platforms eliminate this pattern.',
      useCases: [
        'Service agents copying customer details between CRM and billing',
        'Underwriters transferring information between risk systems',
        'Operations staff reconciling figures across spreadsheets',
      ],
      relatedTerms: ['Process Orchestration', 'Data Fabric', 'Clean Core'],
    },
  },
  {
    id: 'data-virtualisation',
    term: 'Data Virtualisation',
    tabooWords: ['connect', 'migrate', 'copy', 'real-time'],
    category: 'strategic-concepts',
    difficulty: 'hard',
    definition: {
      short: 'An architectural approach that links to information where it lives rather than moving it.',
      detailed: 'Data Virtualisation creates a unified view of information without physically relocating it. Instead of ETL (extract, transform, load) operations that duplicate information, virtualisation maintains links to source systems. This reduces storage costs, eliminates sync issues, and ensures currency. The mantra is "link, don\'t duplicate."',
      useCases: [
        'Creating unified customer views without a warehouse project',
        'Real-time analytics across operational systems',
        'Regulatory reporting without staging environments',
      ],
      relatedTerms: ['Data Fabric', 'Record Types', 'Connected Systems'],
    },
  },
  {
    id: 'burning-platform',
    term: 'Burning Platform',
    tabooWords: ['crisis', 'urgent', 'change', 'pressure'],
    category: 'strategic-concepts',
    difficulty: 'medium',
    definition: {
      short: 'A situation so critical that staying put is more dangerous than leaping into transformation.',
      detailed: 'The Burning Platform metaphor describes when maintaining the status quo is no longer viable. It creates the impetus for significant transformation that might otherwise be resisted. Examples include regulatory deadlines, competitive threats, or technology obsolescence. The phrase originates from a North Sea oil rig disaster.',
      useCases: [
        'Regulatory compliance deadlines forcing modernisation',
        'Competitor disruption requiring rapid response',
        'End-of-life systems demanding replacement',
      ],
      relatedTerms: ['Migration Bubble', 'Zero-Day Value', 'Clean Core'],
    },
  },
  {
    id: 'migration-bubble',
    term: 'Migration Bubble',
    tabooWords: ['cost', 'transition', 'parallel', 'spike'],
    category: 'strategic-concepts',
    difficulty: 'hard',
    definition: {
      short: 'The temporary expense increase during transformation when old and new systems run simultaneously.',
      detailed: 'Migration Bubble refers to the period during transformation when organisations must maintain both legacy and new systems. This creates a temporary increase in operational expenses (licensing, infrastructure, staffing). Successful planning accounts for and minimises this bubble duration.',
      useCases: [
        'Budgeting for dual-running periods in business cases',
        'Planning cutover strategies to minimise overlap',
        'Communicating realistic timelines to stakeholders',
      ],
      relatedTerms: ['Burning Platform', 'Zero-Day Value', 'Clean Core'],
    },
  },
  {
    id: 'zero-day-value',
    term: 'Zero-Day Value',
    tabooWords: ['ROI', 'implementation', 'gap', 'delay'],
    category: 'strategic-concepts',
    difficulty: 'hard',
    definition: {
      short: 'The period between signing and when benefits actually begin flowing.',
      detailed: 'Zero-Day Value represents the time between commitment (contract, funding approval) and when actual benefits materialise. Traditional implementations create long periods of zero-day value. Appian\'s rapid deployment approach (e.g., the 8-week guarantee) minimises this gap, accelerating time to benefit.',
      useCases: [
        'Justifying platform selection based on time-to-benefit',
        'Planning resource allocation during implementation',
        'Setting realistic stakeholder expectations',
      ],
      relatedTerms: ['Appian Guarantee', 'Migration Bubble', 'Burning Platform'],
    },
  },
  {
    id: 'the-sentinel',
    term: 'The Sentinel',
    tabooWords: ['security', 'protect', 'shield', 'abstraction'],
    category: 'strategic-concepts',
    difficulty: 'hard',
    definition: {
      short: 'An architectural guardian that sits between chaotic edges and stable cores.',
      detailed: 'The Sentinel is a metaphor for a protective architectural tier that manages interactions between unpredictable external elements and stable internal systems. It validates, transforms, and controls information flow. The sentinel ensures that core systems remain protected from edge volatility.',
      useCases: [
        'API gateway protecting backend services',
        'Orchestration layer managing external partner interactions',
        'Security tier validating all inbound requests',
      ],
      relatedTerms: ['Agility Layer', 'Clean Core', 'Appian Protect'],
    },
  },
  {
    id: 'keep-the-core-clean',
    term: 'Keep the Core Clean',
    tabooWords: ['ERP', 'customisation', 'extend', 'wrap'],
    category: 'strategic-concepts',
    difficulty: 'medium',
    definition: {
      short: 'The strategic principle of avoiding modifications to foundational enterprise systems.',
      detailed: 'Keep the Core Clean is the guiding principle behind Clean Core strategies. It advocates for treating enterprise backends as stable foundations that should remain in standard configuration. All modifications, extensions, and customisations should exist in surrounding layers rather than within the core itself.',
      useCases: [
        'Evaluating where new requirements should be built',
        'Planning upgrade strategies for enterprise systems',
        'Establishing governance for change requests',
      ],
      relatedTerms: ['Clean Core', 'Agility Layer', 'Process Orchestration'],
    },
  },

  // ============================================
  // CATEGORY 4: CUSTOMER SUCCESS (8 cards)
  // ============================================
  {
    id: 'appian-guarantee',
    term: 'Appian Guarantee',
    tabooWords: ['eight', 'weeks', 'deliver', 'promise'],
    category: 'customer-success',
    difficulty: 'easy',
    definition: {
      short: 'Programme to produce one solution per customer in a defined short timeframe, backed by commitment.',
      detailed: 'The Appian Guarantee is a formal commitment to deliver a working solution within a specific timeframe. It demonstrates confidence in the platform\'s rapid development capabilities. The programme includes dedicated resources, proven methodology, and executive sponsorship.',
      useCases: [
        'De-risking initial platform adoption',
        'Proving value quickly to stakeholders',
        'Building momentum for broader transformation',
      ],
      relatedTerms: ['Zero-Day Value', 'Appian Max', 'Appian Delivery'],
    },
  },
  {
    id: 'appian-accelerate',
    term: 'Appian Accelerate',
    tabooWords: ['advisory', 'expert', 'optimise', 'support'],
    category: 'customer-success',
    difficulty: 'medium',
    definition: {
      short: 'Service propelling teams forward and maximising platform value through experienced guidance.',
      detailed: 'Appian Accelerate provides experienced guidance to help customers get the most from the platform. It includes architectural reviews, best practice recommendations, and strategic planning. The service helps teams avoid common pitfalls and adopt proven patterns.',
      useCases: [
        'Optimising solution architecture for scalability',
        'Planning centre of excellence establishment',
        'Preparing for major platform upgrades',
      ],
      relatedTerms: ['Appian Boost', 'Appian Empowerment', 'Success Plans'],
    },
  },
  {
    id: 'appian-max',
    term: 'Appian Max',
    tabooWords: ['methodology', 'agile', 'delivery', 'framework'],
    category: 'customer-success',
    difficulty: 'medium',
    definition: {
      short: 'Official Appian approach borrowing from iterative practices but adapted for rapid configuration.',
      detailed: 'Appian Max is the recommended approach for building on the platform. It incorporates iterative practices adapted for rapid configuration capabilities. The approach covers five pillars: Vision, People, Delivery, Architecture, and Platform. It balances speed with governance and quality.',
      useCases: [
        'Structuring project teams and ceremonies',
        'Planning iteration cycles and demonstrations',
        'Establishing quality gates and reviews',
      ],
      relatedTerms: ['Appian Guarantee', 'Appian Delivery', 'Appian Empowerment'],
    },
  },
  {
    id: 'success-plans',
    term: 'Success Plans',
    tabooWords: ['support', 'tier', 'foundational', 'signature'],
    category: 'customer-success',
    difficulty: 'easy',
    definition: {
      short: 'Customer assistance packages available at different levels of engagement and coverage.',
      detailed: 'Success Plans are the support offerings available to Appian customers. They come in different levels with varying response times, coverage hours, and included services. Higher tiers include dedicated resources and proactive engagement. All customers receive some level of support.',
      useCases: [
        'Selecting appropriate support level for business criticality',
        'Understanding response time commitments',
        'Accessing technical resources for issue resolution',
      ],
      relatedTerms: ['Appian Accelerate', 'Appian Boost', 'Appian Community'],
    },
  },
  {
    id: 'appian-academy',
    term: 'Appian Academy',
    tabooWords: ['training', 'course', 'learn', 'certify'],
    category: 'customer-success',
    difficulty: 'easy',
    definition: {
      short: 'Collection of online and in-person educational resources for developing Appian skills.',
      detailed: 'Appian Academy is the official educational platform for Appian skills. It includes self-paced online modules, instructor-led sessions, hands-on exercises, and examinations. The programme covers all roles from analysts to architects. Completion leads to official recognition.',
      useCases: [
        'Onboarding new team members to the platform',
        'Preparing for official recognition examinations',
        'Continuous skill development for existing teams',
      ],
      relatedTerms: ['Appian Empowerment', 'Appian Community', 'Appian Max'],
    },
  },
  {
    id: 'appian-boost',
    term: 'Appian Boost',
    tabooWords: ['support', 'lifecycle', 'expert', 'help'],
    category: 'customer-success',
    difficulty: 'easy',
    definition: {
      short: 'Assistance from customer success specialists throughout the project journey.',
      detailed: 'Appian Boost provides access to customer success specialists who guide projects from inception through production. The service includes regular check-ins, milestone reviews, and proactive guidance. It helps ensure projects stay on track and adopt best practices.',
      useCases: [
        'Getting guidance during initial implementation',
        'Navigating complex integration scenarios',
        'Preparing for production deployment',
      ],
      relatedTerms: ['Appian Accelerate', 'Success Plans', 'Appian Delivery'],
    },
  },
  {
    id: 'appian-community',
    term: 'Appian Community',
    tabooWords: ['forum', 'developer', 'share', 'hub'],
    category: 'customer-success',
    difficulty: 'easy',
    definition: {
      short: 'Online gathering place for customers, builders, and partners to collaborate and exchange knowledge.',
      detailed: 'Appian Community is the online platform where the Appian ecosystem connects. It includes discussion areas, knowledge articles, code samples, and event announcements. Members can ask questions, share solutions, and network with peers. It\'s accessible to all Appian users.',
      useCases: [
        'Finding answers to technical questions',
        'Sharing solutions with the broader community',
        'Staying informed about platform updates',
      ],
      relatedTerms: ['Community Edition', 'Appian Academy', 'AppMarket'],
    },
  },
  {
    id: 'community-edition',
    term: 'Community Edition',
    tabooWords: ['free', 'trial', 'development', 'environment'],
    category: 'customer-success',
    difficulty: 'easy',
    definition: {
      short: 'Complimentary version with one dedicated space for exploration and skill building.',
      detailed: 'Community Edition provides access to Appian at no cost for personal use. It includes one dedicated space for building and experimenting. The edition is popular for skill development, prototyping, and evaluation. It includes most platform capabilities.',
      useCases: [
        'Learning Appian before joining a project',
        'Prototyping ideas before proposing to customers',
        'Preparing for recognition examinations',
      ],
      relatedTerms: ['Appian Community', 'Appian Academy', 'Low-Code'],
    },
  },

  // ============================================
  // CATEGORY 5: SOLUTIONS & PRODUCTS (10 cards)
  // ============================================
  {
    id: 'connected-claims',
    term: 'Connected Claims',
    tabooWords: ['insurance', 'claim', 'process', 'automate'],
    category: 'solutions-products',
    difficulty: 'medium',
    definition: {
      short: 'Pre-built industry solution for managing the lifecycle of loss notifications and settlements.',
      detailed: 'Connected Claims is an Appian solution for insurance carriers. It manages the complete lifecycle from first notice of loss through investigation, evaluation, and settlement. The solution includes intelligent document handling, customer communication, and compliance tracking.',
      useCases: [
        'Accelerating claims handling turnaround',
        'Reducing manual document review',
        'Improving customer experience during loss events',
      ],
      relatedTerms: ['Connected Underwriting', 'Case Management Studio', 'DocCenter'],
    },
  },
  {
    id: 'connected-underwriting',
    term: 'Connected Underwriting',
    tabooWords: ['insurance', 'risk', 'assess', 'policy'],
    category: 'solutions-products',
    difficulty: 'medium',
    definition: {
      short: 'Pre-built industry solution for evaluating and pricing coverage applications.',
      detailed: 'Connected Underwriting streamlines the evaluation of coverage applications. It includes workbenches for both life and property/casualty lines. The solution coordinates information gathering, evaluation, and decision-making. It integrates with external sources for validation.',
      useCases: [
        'Streamlining new business submissions',
        'Coordinating multi-level approval workflows',
        'Integrating external scoring and validation',
      ],
      relatedTerms: ['Connected Claims', 'Connected KYC', 'Case Management Studio'],
    },
  },
  {
    id: 'connected-kyc',
    term: 'Connected KYC',
    tabooWords: ['compliance', 'customer', 'verify', 'identity'],
    category: 'solutions-products',
    difficulty: 'medium',
    definition: {
      short: 'Pre-built solution for financial services firms managing the know-your-customer lifecycle.',
      detailed: 'Connected KYC helps financial institutions manage regulatory requirements for client verification. It coordinates the collection, validation, and ongoing monitoring of client information. The solution includes integration with screening services and regulatory reporting.',
      useCases: [
        'Onboarding new corporate clients',
        'Periodic review and re-verification',
        'Managing screening alerts and investigations',
      ],
      relatedTerms: ['Connected Onboarding and Servicing', 'Case Management Studio', 'DocCenter'],
    },
  },
  {
    id: 'case-management-studio',
    term: 'Case Management Studio',
    tabooWords: ['case', 'workflow', 'prebuilt', 'template'],
    category: 'solutions-products',
    difficulty: 'medium',
    definition: {
      short: 'Suite of ready-to-use applications for managing complex, multi-step work.',
      detailed: 'Case Management Studio provides pre-configured applications for common case-handling scenarios. It comes pre-installed for some cloud customers. The studio includes investigation management, service requests, and incident handling. Solutions can be customised to specific requirements.',
      useCases: [
        'Launching a new case management capability quickly',
        'Standardising how cases are handled across departments',
        'Providing a foundation for industry-specific customisation',
      ],
      relatedTerms: ['Connected Claims', 'Connected KYC', 'Process Orchestration'],
    },
  },
  {
    id: 'process-hq',
    term: 'Process HQ',
    tabooWords: ['mining', 'insight', 'improve', 'AI'],
    category: 'solutions-products',
    difficulty: 'medium',
    definition: {
      short: 'Platform capabilities for finding workflow inefficiencies and addressing them with intelligent guidance.',
      detailed: 'Process HQ combines analysis and improvement capabilities. It includes understanding how work actually flows, identifying patterns and anomalies, and receiving intelligent suggestions. The capability enables continuous improvement of business operations.',
      useCases: [
        'Establishing a continuous improvement programme',
        'Identifying automation opportunities',
        'Monitoring operational performance',
      ],
      relatedTerms: ['Process Mining', 'Process Insights', 'Process Orchestration'],
    },
  },
  {
    id: 'appian-rpa',
    term: 'Appian RPA',
    tabooWords: ['robot', 'automate', 'click', 'bot'],
    category: 'solutions-products',
    difficulty: 'medium',
    definition: {
      short: 'Appian\'s capability for simulating human interactions with legacy system interfaces.',
      detailed: 'Appian RPA enables the creation of digital workers that mimic human keyboard and mouse actions. It\'s positioned as an integration approach for systems without modern interfaces. The Robotic Workforce Manager orchestrates these digital workers. RPA is one component in a broader orchestration strategy.',
      useCases: [
        'Extracting information from legacy terminals',
        'Performing routine transactions in systems without APIs',
        'Bridging to systems pending modernisation',
      ],
      relatedTerms: ['Robotic Workforce Manager', 'Process Orchestration', 'Connected Systems'],
    },
  },
  {
    id: 'appian-edge',
    term: 'Appian Edge',
    tabooWords: ['defence', 'offline', 'disconnected', 'military'],
    category: 'solutions-products',
    difficulty: 'hard',
    definition: {
      short: 'Hardware and software solution for agencies operating in low-connectivity or sensitive environments.',
      detailed: 'Appian Edge is designed for scenarios where standard cloud connectivity isn\'t available or appropriate. It provides the Appian platform in a deployable form factor. The solution is particularly relevant for agencies with strict requirements around where solutions run and where information resides.',
      useCases: [
        'Field operations with limited connectivity',
        'Classified environments with air-gap requirements',
        'Remote locations without reliable network',
      ],
      relatedTerms: ['Government Cloud', 'Appian Protect', 'FedRAMP'],
    },
  },
  {
    id: 'appian-protect',
    term: 'Appian Protect',
    tabooWords: ['security', 'compliance', 'trust', 'cloud'],
    category: 'solutions-products',
    difficulty: 'medium',
    definition: {
      short: 'Suite of safeguarding and assurance features for the Appian hosting environment.',
      detailed: 'Appian Protect encompasses the security controls, certifications, and trust features of Appian\'s hosted offering. It includes encryption, access controls, audit logging, and compliance certifications. The suite addresses requirements for regulated industries and government.',
      useCases: [
        'Meeting regulatory compliance requirements',
        'Demonstrating security controls to auditors',
        'Ensuring information protection in transit and at rest',
      ],
      relatedTerms: ['Private AI', 'FedRAMP', 'Government Cloud'],
    },
  },
  {
    id: 'government-cloud',
    term: 'Government Cloud',
    tabooWords: ['federal', 'DoD', 'security', 'government'],
    category: 'solutions-products',
    difficulty: 'easy',
    definition: {
      short: 'Appian hosting offering designed for US public sector requirements including high-impact classifications.',
      detailed: 'Government Cloud is Appian\'s dedicated hosting environment for US public sector customers. It meets the requirements for handling sensitive but unclassified information and higher classifications. The environment is separate from commercial cloud and has enhanced controls.',
      useCases: [
        'Agency solutions requiring dedicated infrastructure',
        'Programmes handling controlled unclassified information',
        'Contractors supporting sensitive programmes',
      ],
      relatedTerms: ['Appian Edge', 'FedRAMP', 'Appian Protect'],
    },
  },
  {
    id: 'autoscale',
    term: 'Autoscale',
    tabooWords: ['scale', 'million', 'process', 'performance'],
    category: 'solutions-products',
    difficulty: 'medium',
    definition: {
      short: 'Cloud capability to automatically adjust capacity up to very high transaction volumes.',
      detailed: 'Autoscale is an Appian Cloud feature that automatically adjusts computing resources based on demand. It can handle significant spikes in transaction volumes without manual intervention. The capability ensures consistent response times during peak periods.',
      useCases: [
        'Handling seasonal volume spikes',
        'Supporting high-volume batch operations',
        'Maintaining performance during unexpected demand',
      ],
      relatedTerms: ['Appian Cloud', 'Appian Protect', 'Process Orchestration'],
    },
  },

  // ============================================
  // CATEGORY 6: TECHNICAL DIFFERENTIATORS (8 cards)
  // ============================================
  {
    id: 'platform-agnostic',
    term: 'Platform-Agnostic',
    tabooWords: ['cloud', 'deploy', 'vendor', 'lock-in'],
    category: 'technical-differentiators',
    difficulty: 'hard',
    definition: {
      short: 'Appian\'s flexibility to run in various hosting environments without being tied to one provider.',
      detailed: 'Platform-Agnostic means Appian can operate across different infrastructure choices. Customers can use Appian\'s managed offering, major commercial providers, private infrastructure, or combinations. This flexibility avoids dependency on any single infrastructure provider.',
      useCases: [
        'Multi-provider strategies for resilience',
        'Compliance requirements for infrastructure location',
        'Existing infrastructure investment leverage',
      ],
      relatedTerms: ['Appian Cloud', 'Appian Edge', 'Government Cloud'],
    },
  },
  {
    id: 'integration-sdk',
    term: 'Integration SDK',
    tabooWords: ['extend', 'plugin', 'connector', 'custom'],
    category: 'technical-differentiators',
    difficulty: 'hard',
    definition: {
      short: 'Development kit providing two ways to add capabilities: connection types and screen elements.',
      detailed: 'The Integration SDK allows extending Appian\'s capabilities. It supports creating new connection types for systems without pre-built support. It also enables custom screen elements for specialised visualisations or interactions. Created additions appear native in the platform.',
      useCases: [
        'Building connectors for proprietary systems',
        'Creating specialised chart components',
        'Integrating with industry-specific services',
      ],
      relatedTerms: ['Connected Systems', 'AppMarket', 'Low-Code'],
    },
  },
  {
    id: 'appmarket',
    term: 'AppMarket',
    tabooWords: ['marketplace', 'solution', 'download', 'partner'],
    category: 'technical-differentiators',
    difficulty: 'easy',
    definition: {
      short: 'Showcase where Appian and ecosystem members offer ready-to-use business and technical additions.',
      detailed: 'AppMarket is the central repository for extensions and solutions. It includes offerings from Appian and the partner ecosystem. Items range from technical components (connectors, plugins) to complete business solutions. Customers can browse, evaluate, and deploy from AppMarket.',
      useCases: [
        'Finding pre-built connectors for common systems',
        'Discovering industry-specific solution accelerators',
        'Sharing internally-built components with the community',
      ],
      relatedTerms: ['Integration SDK', 'Appian Community', 'Connected Systems'],
    },
  },
  {
    id: 'robotic-workforce-manager',
    term: 'Robotic Workforce Manager',
    tabooWords: ['RPA', 'bot', 'orchestrate', 'queue'],
    category: 'technical-differentiators',
    difficulty: 'hard',
    definition: {
      short: 'Capability for coordinating enterprise digital worker requests and execution.',
      detailed: 'Robotic Workforce Manager is part of Appian RPA. It manages the allocation and scheduling of digital workers across the organisation. The manager handles request prioritisation, capacity planning, and execution monitoring. It ensures efficient use of digital worker resources.',
      useCases: [
        'Managing digital worker capacity across departments',
        'Prioritising urgent requests during peak periods',
        'Monitoring digital worker health and performance',
      ],
      relatedTerms: ['Appian RPA', 'Process Orchestration', 'Autoscale'],
    },
  },
  {
    id: 'fedramp',
    term: 'FedRAMP',
    tabooWords: ['federal', 'security', 'compliance', 'government'],
    category: 'technical-differentiators',
    difficulty: 'medium',
    definition: {
      short: 'US programme establishing standardised assessment for hosted services used by agencies.',
      detailed: 'FedRAMP (Federal Risk and Authorization Management Program) is a US programme for assessing hosted service security. Appian maintains authorisation under this programme. The certification demonstrates compliance with rigorous control requirements. It\'s often a prerequisite for public sector adoption.',
      useCases: [
        'Meeting procurement requirements for agencies',
        'Demonstrating security posture to evaluators',
        'Streamlining authority to operate processes',
      ],
      relatedTerms: ['Government Cloud', 'Appian Protect', 'SOC 2 Type II'],
    },
  },
  {
    id: 'soc-2-type-ii',
    term: 'SOC 2 Type II',
    tabooWords: ['audit', 'security', 'certification', 'control'],
    category: 'technical-differentiators',
    difficulty: 'medium',
    definition: {
      short: 'Independent assessment of service organisation safeguards over an extended period.',
      detailed: 'SOC 2 Type II is an auditing standard for service organisations. It evaluates controls over availability, security, processing integrity, confidentiality, and privacy. Type II assessments cover controls operating over a period (typically 12 months). Appian maintains this assessment for its hosted offering.',
      useCases: [
        'Satisfying vendor assessment requirements',
        'Demonstrating control effectiveness to customers',
        'Supporting due diligence processes',
      ],
      relatedTerms: ['FedRAMP', 'Appian Protect', 'HIPAA'],
    },
  },
  {
    id: 'hipaa',
    term: 'HIPAA',
    tabooWords: ['healthcare', 'compliance', 'privacy', 'medical'],
    category: 'technical-differentiators',
    difficulty: 'easy',
    definition: {
      short: 'US regulation governing protected health information that Appian supports.',
      detailed: 'HIPAA (Health Insurance Portability and Accountability Act) sets requirements for handling protected health information in the US. Appian provides capabilities and certifications supporting HIPAA compliance. Customers in relevant industries can build compliant solutions on the platform.',
      useCases: [
        'Building patient-facing healthcare portals',
        'Managing health plan administration processes',
        'Coordinating care management programmes',
      ],
      relatedTerms: ['SOC 2 Type II', 'Appian Protect', 'Private AI'],
    },
  },
  {
    id: 'code-optional',
    term: 'Code Optional',
    tabooWords: ['developer', 'write', 'build', 'optional'],
    category: 'technical-differentiators',
    difficulty: 'medium',
    definition: {
      short: 'Philosophy that enterprise applications can be configured without programming but with the ability to use it when beneficial.',
      detailed: 'Code Optional describes Appian\'s honest positioning. Most capabilities are configurable without traditional programming. However, when specialised requirements arise, custom elements can be incorporated. This balances accessibility with power, avoiding false "no-code" promises.',
      useCases: [
        'Empowering business analysts to configure solutions',
        'Allowing specialists to add custom components',
        'Balancing speed with capability requirements',
      ],
      relatedTerms: ['Low-Code', 'Integration SDK', 'SAIL'],
    },
  },
];

export const getCardsByCategory = (category: string): Card[] =>
  cards.filter((card) => card.category === category);

export const getCardsByDifficulty = (difficulty: string): Card[] =>
  cards.filter((card) => card.difficulty === difficulty);

export const shuffleCards = (cardList: Card[]): Card[] => {
  const shuffled = [...cardList];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const filterCards = (
  categories: string[],
  difficulty: string
): Card[] => {
  let filtered = cards;

  if (categories.length > 0) {
    filtered = filtered.filter((card) => categories.includes(card.category));
  }

  if (difficulty !== 'all') {
    filtered = filtered.filter((card) => card.difficulty === difficulty);
  }

  return shuffleCards(filtered);
};
