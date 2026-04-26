// Icons are now handled as strings in the BootcampComponent

const DATA_SCIENCE = {
    title: "Data Science Bootcamp",
    description:
        "Data Science combines statistical analysis, machine learning, and domain expertise to extract insights from data. Learn to build predictive models, perform advanced analytics, and make data-driven decisions. Master Python, R, machine learning algorithms, and data visualization to become a skilled data scientist in today's data-driven world.",
    duration: "06 Months",
    schedule: "Wednesday, Thursday",
    startDate: "16 August, 2025",
    format: "Online & Interactive",
    price: "PKR 100,000",
    days: "Days: Fri, Sat",
    mode: "Mode: Online & Interactive",
    starting: "Starting: 1 September, 2025",
    category: "BECOME A CERTIFIED",
    instructor: {
        name: "AMIR JABBAR",
        title:
            "Data Top Voice | Business Analyst @Engro Group | Keynote Speaker | Solving Business Problems with Data Analytics",
        image: "/api/placeholder/200/250",
        bio: "Amir is a globally experienced Business Data Analyst, currently serving in the Business Strategy & Development department at Quasico Inc. He empowers organizations with data-driven insights and innovative solutions. With a strong track record in multinational companies, he has driven transformations through analytical techniques such as predictive modeling, statistical analysis, and data visualization.",
        experience:
            "Amir has trained over 100 professionals from top organizations like GSK, HBL, P&G, Marico, Easyss, UNCP, and Citi Bank, helping them acquire future-ready skills. Known for his interactive and hands-on teaching style, he delivers industry-relevant training that ensures practical and impactful learning.",
        subtitle: "Senior Data Engineer",
        badges: [
            { text: "Data Consultant", icon: "Users", color: "green" },
            { text: "Big Data Analytics Expert", icon: "Code", color: "blue" },
        ],
    },
    modules: [
        { title: "Introduction to Data Science" },
        { title: "Statistics and Probability" },
        { title: "Python for Data Science" },
        { title: "Data Manipulation with Pandas" },
        { title: "Data Visualization" },
        { title: "Machine Learning Fundamentals" },
        { title: "Advanced Machine Learning" },
        { title: "Deep Learning Basics" },
        { title: "Data Science Projects & Portfolio" },
    ],
    tools: [
        { name: "Python", icon: "Code" },
        { name: "Pandas", icon: "Code" },
        { name: "NumPy", icon: "Code" },
        { name: "Matplotlib", icon: "Code" },
        { name: "Seaborn", icon: "Code" },
        { name: "Scikit-learn", icon: "Code" },
        { name: "TensorFlow", icon: "Code" },
        { name: "Jupyter Notebook", icon: "Monitor" },
        { name: "Git", icon: "Code" },
    ],
    heroMessage:
        "Start your journey to a global career in Data Science! Master machine learning and analytics",
    certificationTitle: "DATA SCIENTIST",
};

const DATA_ANALYTICS = {
    title: "Data Analytics Bootcamp",
    description:
        "Data Analytics is the process of examining, transforming, and interpreting data to uncover meaningful insights, patterns, and trends. It helps businesses make informed decisions, optimize performance, and predict future outcomes. Using tools like Excel, SQL, Power BI, and Python, data analysts turn raw data into actionable intelligence.",
    duration: "06 Months",
    schedule: "Monday, Tuesday",
    startDate: "16 August, 2025",
    format: "Online & Interactive",
    price: "PKR 60,000",
    days: "Days: Fri, Sat",
    mode: "Mode: Online & Interactive",
    starting: "Starting: 1 September, 2025",
    category: "BECOME A CERTIFIED",
    instructor: {
        name: "AMir Jabbar",
        title:
            "Data Top Voice | Business Analyst @Engro Group | Keynote Speaker | Solving Business Problems with Data Analytics",
        image: "/images/courses/Amir Bhai-002.png",
        bio: "Amir is a globally experienced Business Data Analyst, currently serving in the Business Strategy & Development department at Quecko Inc. He empowers organizations with data-driven insights and innovative solutions. With a strong track record in multinational companies, He has driven transformations through analytical techniques such as customer analysis, churn analysis, and product- level analysis.",
        experience:
            "Amir has trained over 100 professionals from top organizations like GSK, HBL, PSO, Nokia, Etisalat, UNDP, and Citi Bank, helping them acquire future-ready skills. Known for his interactive and hands-on teaching style, He delivers industry-relevant training that ensures practical and impactful learning.",
        badges: [
            { text: "Big Data Analytics Expert", icon: "Users", color: "green" },
            { text: "Data Consultant", color: "blue" },
        ],
    },
    modules: [
        {
            title: "Module 1: Introduction to Data Analytics",

            subtopics: [
                {
                    items: [
                        "What is Data Analytics?",
                        "Types of Data Analytics: Descriptive, Diagnostic, Predictive, Prescriptive",
                        "Data Analytics Lifecycle",
                        "Role of a Data Analyst in organizations",
                    ],
                },
            ],
        },

        {
            title: "Module 2: Excel for Data Analysis",

            subtopics: [
                {
                    items: [
                        "Data cleaning & transformation techniques",
                        "Pivot tables, charts, and dashboards",
                        "Lookup functions (VLOOKUP, HLOOKUP, INDEX-MATCH)",
                        "Basic data visualization",
                    ],
                },
            ],
        },

        {
            title: "Module 3: SQL for Data Querying",

            subtopics: [
                {
                    items: [
                        "Introduction to Relational Databases",
                        "SQL Basics: SELECT, WHERE, JOIN, GROUP BY",
                        "Aggregations and filtering",
                        "Subqueries and CTEs",
                    ],
                },
            ],
        },

        {
            title: "Module 4: Python for Data Analysis",

            subtopics: [
                {
                    items: [
                        "Python basics: variables, loops, functions",
                        "Using Pandas for data manipulation",
                        "Numpy for numerical computations",
                        "Data visualization with Matplotlib & Seaborn",
                    ],
                },
            ],
        },

        {
            title: "Module 5: Data Cleaning and Preparation",

            subtopics: [
                {
                    items: [
                        "Handling missing, duplicate, and inconsistent data",
                        "Data type conversions and formatting",
                        "Outlier detection and removal",
                        "Preparing data for analysis",
                    ],
                },
            ],
        },

        {
            title: "Module 6: Exploratory Data Analysis (EDA)",

            subtopics: [
                {
                    items: [
                        "Univariate and Bivariate analysis",
                        "Data profiling and distribution checks",
                        "Correlation and trend analysis",
                        "Data visualization techniques",
                    ],
                },
            ],
        },

        {
            title: "Module 7: Introduction to Business Intelligence (BI) Tools",

            subtopics: [
                {
                    items: [
                        "Overview of BI tools: Power BI/Tableau",
                        "Connecting data sources",
                        "Creating visual dashboards",
                        "Interactive filtering and drill-downs",
                    ],
                },
            ],
        },

        {
            title: "Module 8: Data-Driven Decision Making",

            subtopics: [
                {
                    items: [
                        "Creating KPI reports and business insights",
                        "Real-life use cases: Sales, Marketing, HR Analytics",
                        "Communicating insights through storytelling",
                        "Building and presenting data reports",
                    ],
                },
            ],
        },

        {
            title: "Module 9: Capstone Project & Career Mentorship",

            subtopics: [
                {
                    items: [
                        "End-to-end data analytics project",
                        "Problem statement to data visualization",
                        "Resume building & interview preparation",
                        "Mentoring sessions from industry professionals",
                    ],
                },
            ],
        },
    ],
    tools: [
        { name: "Microsoft Excel", icon: "Monitor" },
        { name: "SQL", icon: "Code" },
        { name: "MySQL", icon: "Monitor" },
        { name: "Python", icon: "Code" },
        { name: "Pandas", icon: "Code" },
        { name: "NumPy", icon: "Code" },
        { name: "Matplotlib", icon: "Code" },
        { name: "Seaborn", icon: "Code" },
        { name: "Power BI", icon: "Monitor" },
        { name: "Tableau", icon: "Monitor" },
    ],

    heroMessage:
        "Start your journey to a global career in Data Engineering! Gain hands-on skills and become an industry-ready professional",
    certificationTitle: "DATA ANALYTICS EXPERT",
};

const DATA_ENGINEERING = {
    title: "Data Engineering Bootcamp",
    description:
        "Data Engineering is the process of designing, building and maintaining data infrastructure and pipelines to collect, store and process large volumes of data efficiently. It supports data analysis, machine learning, and business intelligence by ensuring data is clean, accessible, and reliable. With the growth of big data, IoT, and AI, data engineering has become a critical role in modern organizations. The demand for skilled data engineers is rapidly increasing across industries. In the future, automation, real-time processing, and cloud-native technologies will likely define this field's evolution.",
    duration: "06 Months",
    schedule: "Wednesday, Thursday",
    startDate: "16 August, 2025",
    format: "Online & Interactive",
    price: "PKR 60,000",
    days: "Days: Fri, Sat",
    mode: "Mode: Online & Interactive",
    starting: "Starting: 1 September, 2025",
    category: "BECOME A CERTIFIED",
    instructor: {
        name: "AMIR JABBAR",
        title:
            "Data Top Voice | Business Analyst @Engro Group | Keynote Speaker | Solving Business Problems with Data Analytics",
        image: "/images/courses/Amir Bhai-001.png",
        bio: "Amir is a globally experienced Business Data Analyst, currently serving in the Business Strategy & Development department at Quasico Inc. He empowers organizations with data-driven insights and innovative solutions. With a strong track record in multinational companies, he has driven transformations through analytical techniques such as predictive modeling, statistical analysis, and data visualization.",
        experience:
            "Amir has trained over 100 professionals from top organizations like GSK, HBL, P&G, Marico, Easyss, UNCP, and Citi Bank, helping them acquire future-ready skills. Known for his interactive and hands-on teaching style, he delivers industry-relevant training that ensures practical and impactful learning.",
        // subtitle: "Senior Data Engineer",
        // badges: [
        //   { text: "Data Consultant", icon: "Users", color: "green" },
        //   { text: "Big Data Analytics Expert", color: "blue" },
        // ],
    },
    modules: [
        {
            title: "Core Data Engineering Concepts",
            description:
                "Master foundational concepts that form the backbone of modern data engineering practices.",
            subtopics: [
                {
                    category: "Understanding",
                    items: [
                        "Databases, Data Warehouses, Data Lakes, Data Marts",
                        "Differences between Structured, Semi-Structured, and Unstructured Data",
                    ],
                },
                {
                    category: "Change Tracking",
                    items: [
                        "CDC (Change Data Capture)",
                        "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
                    ],
                },
                {
                    category: "Data Flow",
                    items: [
                        "Batch Data vs. Stream Data",
                        "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
                        "MySQL, Python, PySpark",
                        "Tools: Talend, Airflow, Kafka",
                    ],
                },
                {
                    category: "Methodologies",
                    items: ["OLAP vs. OLTP – Definitions and Usage"],
                },
                {
                    category: "Dimensional Modelling",
                    items: ["Importance", "Star Schema vs. Snowflake Schema"],
                },
            ],
            tags: ["Data Architecture", "ETL/ELT", "Dimensional Modeling"],
        },
        {
            title: "Python for Data Engineering",
            description:
                "Learn Python programming specifically tailored for data engineering tasks and automation.",
            subtopics: [
                {
                    category: "Understanding",
                    items: [
                        "Databases, Data Warehouses, Data Lakes, Data Marts",
                        "Differences between Structured, Semi-Structured, and Unstructured Data",
                    ],
                },
                {
                    category: "Change Tracking",
                    items: [
                        "CDC (Change Data Capture)",
                        "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
                    ],
                },
                {
                    category: "Data Flow",
                    items: [
                        "Batch Data vs. Stream Data",
                        "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
                        "MySQL, Python, PySpark",
                        "Tools: Talend, Airflow, Kafka",
                    ],
                },
                {
                    category: "Methodologies",
                    items: ["OLAP vs. OLTP – Definitions and Usage"],
                },
                {
                    category: "Dimensional Modelling",
                    items: ["Importance", "Star Schema vs. Snowflake Schema"],
                },
                {
                    category: "Module 2: Python for Data Engineering",
                    items: [
                        "Python Essentials:",
                        "  - Data Types: int, float, str, bool, etc.",
                        "  - Type Conversion: str(), int()",
                        "  - Operators: Arithmetic, Comparison, Logical, Assignment, Bitwise",
                        "  - Control Flow: if, else, elif, for, while, break, continue, pass",
                        "  - Functions: def, *args, **kwargs, return, lambda",
                        "  - Data Structures: Lists, Tuples, Dictionaries, Sets",
                        "  - String Manipulation: upper(), lower(), split(), replace(), f-strings",
                        "  - Error Handling: try, except, finally, raise",
                        "",
                        "Python for Data Engineering:",
                        "  - Data Extraction/Manipulation with File Formats",
                        "  - NumPy for Numerical Operations",
                        "  - Pandas for Data Transformation",
                        "  - MySQL Interaction using mysql-connector, pymysql",
                        "  - CRUD Operations",
                        "  - API Integration (Requests & Responses)",
                        "  - Data Loading to Snowflake",
                        "  - Logging Pipeline Execution",
                        "  - Integration with PySpark & Cloud Storage",
                        "  - Real-Time Data with Python & Kafka",
                        "",
                        "Case Study & Project:",
                        "  - ETL/ELT Pipeline using Netflix Dataset (TV shows, Movies, Documentaries)",
                        "  - Use Pandas, NumPy, and Snowflake Connector for analysis and loading",
                    ],
                },
            ],
            tags: ["Python", "Programming", "Data Processing"],
        },

        {
            title: "Scripting and Data Engineering with SQL",
            description:
                "Master advanced SQL techniques for data manipulation, querying, and database management.",
            subtopics: [
                {
                    category: "Understanding",
                    items: [
                        "Databases, Data Warehouses, Data Lakes, Data Marts",
                        "Differences between Structured, Semi-Structured, and Unstructured Data",
                    ],
                },
                {
                    category: "Change Tracking",
                    items: [
                        "CDC (Change Data Capture)",
                        "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
                    ],
                },
                {
                    category: "Data Flow",
                    items: [
                        "Batch Data vs. Stream Data",
                        "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
                        "MySQL, Python, PySpark",
                        "Tools: Talend, Airflow, Kafka",
                    ],
                },
                {
                    category: "Methodologies",
                    items: ["OLAP vs. OLTP – Definitions and Usage"],
                },
                {
                    category: "Dimensional Modelling",
                    items: ["Importance", "Star Schema vs. Snowflake Schema"],
                },
                {
                    category: "Module 3: Scripting and Data Engineering with SQL",
                    items: [
                        "MySQL Fundamentals:",
                        "  - Role of MySQL in RDBMS & ACID Properties",
                        "  - Data Types: Numeric, String, Date/Time",
                        "  - Constraints: PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, DEFAULT, AUTO_INCREMENT",
                        "  - SQL Queries: CREATE, DROP, SELECT, INSERT, UPDATE, DELETE",
                        "  - Clauses: WHERE, HAVING, UNION, LIKE, BETWEEN, IN, ORDER BY, LIMIT",
                        "  - Joins: INNER, LEFT, RIGHT, FULL OUTER",
                        "",
                        "Functions:",
                        "  - Aggregate: COUNT, SUM, AVG, MIN, MAX",
                        "  - Window: ROW_NUMBER, RANK, SUM OVER, LEAD, LAG",
                        "",
                        "Subqueries, Nested Joins, Indexing, Views",
                        "Stored Procedures, Error Logging, EXPLAIN Clause",
                        "",
                        "Advanced Topics:",
                        "  - Normal Forms: 1NF, 2NF, 3NF",
                        "  - Schema Designs: Star, Snowflake",
                        "  - CTEs with WITH clause",
                        "  - Transactions: BEGIN, COMMIT, ROLLBACK",
                        "  - Triggers (BEFORE, AFTER), UDFs",
                        "  - Optimization: Composite & Covering Indices, Query Logs",
                        "  - Horizontal Partitioning & Scaling (Sharding)",
                        "  - ETL with LOAD DATA INFILE",
                        "  - The Three Vs: Volume, Velocity, Variety",
                    ],
                },
            ],
            tags: ["SQL", "Database", "Querying"],
        },

        {
            title: "Data Wrangling",
            description:
                "Clean, transform, and prepare raw data for analysis and downstream processing.",
            subtopics: [
                {
                    category: "Understanding",
                    items: [
                        "Databases, Data Warehouses, Data Lakes, Data Marts",
                        "Differences between Structured, Semi-Structured, and Unstructured Data",
                    ],
                },
                {
                    category: "Change Tracking",
                    items: [
                        "CDC (Change Data Capture)",
                        "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
                    ],
                },
                {
                    category: "Data Flow",
                    items: [
                        "Batch Data vs. Stream Data",
                        "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
                        "MySQL, Python, PySpark",
                        "Tools: Talend, Airflow, Kafka",
                    ],
                },
                {
                    category: "Methodologies",
                    items: ["OLAP vs. OLTP – Definitions and Usage"],
                },
                {
                    category: "Dimensional Modelling",
                    items: ["Importance", "Star Schema vs. Snowflake Schema"],
                },
                {
                    category: "Module 4: Data Wrangling Techniques",
                    items: [
                        "Transforming and refining raw datasets",
                        "",
                        "Managing:",
                        "  - Incomplete data",
                        "  - Duplicate entries",
                        "  - Data type adjustments",
                        "  - Consistency checks",
                        "",
                        "Reshaping & Pivoting data",
                        "Merging & integrating diverse datasets",
                        "Extracting data from JSON, XML, and other unstructured formats",
                    ],
                },
            ],
            tags: ["Data Cleaning", "Transformation", "Preprocessing"],
        },
        {
            title: "Cloud Computing",
            description:
                "Leverage cloud platforms for scalable data engineering solutions and infrastructure.",
            subtopics: [
                {
                    category: "Understanding",
                    items: [
                        "Databases, Data Warehouses, Data Lakes, Data Marts",
                        "Differences between Structured, Semi-Structured, and Unstructured Data",
                    ],
                },
                {
                    category: "Change Tracking",
                    items: [
                        "CDC (Change Data Capture)",
                        "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
                    ],
                },
                {
                    category: "Data Flow",
                    items: [
                        "Batch Data vs. Stream Data",
                        "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
                        "MySQL, Python, PySpark",
                        "Tools: Talend, Airflow, Kafka",
                    ],
                },
                {
                    category: "Methodologies",
                    items: ["OLAP vs. OLTP – Definitions and Usage"],
                },
                {
                    category: "Dimensional Modelling",
                    items: ["Importance", "Star Schema vs. Snowflake Schema"],
                },
            ],
            tags: ["AWS", "Azure", "GCP", "Cloud Architecture"],
        },

        {
            title: "Data Visualization in Tableau",
            description:
                "Create compelling visual representations of data to communicate insights effectively.",
            subtopics: [
                {
                    category: "Understanding",
                    items: [
                        "Databases, Data Warehouses, Data Lakes, Data Marts",
                        "Differences between Structured, Semi-Structured, and Unstructured Data",
                    ],
                },
                {
                    category: "Change Tracking",
                    items: [
                        "CDC (Change Data Capture)",
                        "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
                    ],
                },
                {
                    category: "Data Flow",
                    items: [
                        "Batch Data vs. Stream Data",
                        "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
                        "MySQL, Python, PySpark",
                        "Tools: Talend, Airflow, Kafka",
                    ],
                },
                {
                    category: "Methodologies",
                    items: ["OLAP vs. OLTP – Definitions and Usage"],
                },
                {
                    category: "Dimensional Modelling",
                    items: ["Importance", "Star Schema vs. Snowflake Schema"],
                },
                {
                    category: "Module 5: Cloud Computing",
                    items: [
                        "Importance of platforms: Snowflake, Azure, AWS",
                        "On-Premise vs. Cloud Platforms",
                        "Cloud Storage & Analytics",
                        "Introduction to AWS and Azure Cloud Services",
                        "Scalable & Efficient Data Engineering on Cloud",
                        "",
                        "Case Study & Project:",
                        "  - Build real-time data pipeline using Azure Cloud",
                        "  - Collect, process, and analyze sensor data",
                        "  - Trigger alerts based on insights",
                    ],
                },
            ],
            tags: ["Tableau", "Visualization", "Business Intelligence"],
        },

        {
            title: "Real-Time Data Streaming",
            description:
                "Build systems for processing and analyzing data as it flows in real-time.",
            subtopics: [
                {
                    category: "Understanding",
                    items: [
                        "Databases, Data Warehouses, Data Lakes, Data Marts",
                        "Differences between Structured, Semi-Structured, and Unstructured Data",
                    ],
                },
                {
                    category: "Change Tracking",
                    items: [
                        "CDC (Change Data Capture)",
                        "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
                    ],
                },
                {
                    category: "Data Flow",
                    items: [
                        "Batch Data vs. Stream Data",
                        "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
                        "MySQL, Python, PySpark",
                        "Tools: Talend, Airflow, Kafka",
                    ],
                },
                {
                    category: "Methodologies",
                    items: ["OLAP vs. OLTP – Definitions and Usage"],
                },
                {
                    category: "Dimensional Modelling",
                    items: ["Importance", "Star Schema vs. Snowflake Schema"],
                },
                {
                    category: "Module 6: Data Visualization in Tableau",
                    items: [
                        "Connecting BI Tools with Data Sources",
                        "Importance of Data Visualization",
                        "Overview of Tableau and Power BI",
                        "Types of Charts & Visualizations",
                        "Creating Interactive Dashboards & Reports",
                        "",
                        "Case Study & Project:",
                        "  - Create a dashboard on Tableau/Power BI",
                        "  - Display trends using Snowflake-connected data",
                        "  - Data Preprocessing & choosing right visualizations",
                    ],
                },
            ],
            tags: ["Streaming", "Real-time", "Apache Kafka"],
        },

        {
            title: "Data Pipelines Automation & Scheduling",
            description:
                "Automate data workflows and schedule recurring data processing tasks.",
            subtopics: [
                {
                    category: "Understanding",
                    items: [
                        "Databases, Data Warehouses, Data Lakes, Data Marts",
                        "Differences between Structured, Semi-Structured, and Unstructured Data",
                    ],
                },
                {
                    category: "Change Tracking",
                    items: [
                        "CDC (Change Data Capture)",
                        "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
                    ],
                },
                {
                    category: "Data Flow",
                    items: [
                        "Batch Data vs. Stream Data",
                        "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
                        "MySQL, Python, PySpark",
                        "Tools: Talend, Airflow, Kafka",
                    ],
                },
                {
                    category: "Methodologies",
                    items: ["OLAP vs. OLTP – Definitions and Usage"],
                },
                {
                    category: "Dimensional Modelling",
                    items: ["Importance", "Star Schema vs. Snowflake Schema"],
                },
                {
                    category: "Module 7: Real-Time Data Streaming",
                    items: [
                        "Stream Processing Architecture",
                        "Event-Driven Systems & Message Queues",
                        "Real-Time Data Ingestion & Publishing",
                        "Stateful vs. Stateless Processing",
                        "",
                        "Components of Real-Time Pipelines:",
                        "  - Sources: sensors, social media, databases",
                        "  - Processing: stream transformations, aggregations, filtering, windowing",
                        "  - Storage: Kafka Topics, real-time DBs",
                        "  - Alerts & Downstream Systems",
                        "",
                        "Tools: Apache Kafka, Apache Spark, Apache Flink, AWS Kinesis",
                        "",
                        "Case Study & Project:",
                        "  - ELT pipeline for real-time analytics",
                        "  - Stream data manipulation, processing, monitoring",
                    ],
                },
            ],
            tags: ["Automation", "Scheduling", "Apache Airflow"],
        },

        {
            title: "Capstone Projects & Career Mentorship",
            description:
                "Apply your skills to real-world projects and receive guidance for career advancement.",
            subtopics: [
                {
                    category: "Understanding",
                    items: [
                        "Databases, Data Warehouses, Data Lakes, Data Marts",
                        "Differences between Structured, Semi-Structured, and Unstructured Data",
                    ],
                },
                {
                    category: "Change Tracking",
                    items: [
                        "CDC (Change Data Capture)",
                        "SCD (Slowly Changing Dimensions) – Types and Functional Uses",
                    ],
                },
                {
                    category: "Data Flow",
                    items: [
                        "Batch Data vs. Stream Data",
                        "ETL vs. ELT: Concepts, Use Cases, and Pipeline Creation with:",
                        "MySQL, Python, PySpark",
                        "Tools: Talend, Airflow, Kafka",
                    ],
                },
                {
                    category: "Methodologies",
                    items: ["OLAP vs. OLTP – Definitions and Usage"],
                },
                {
                    category: "Dimensional Modelling",
                    items: ["Importance", "Star Schema vs. Snowflake Schema"],
                },
            ],
            tags: ["Projects", "Mentorship", "Career Development"],
        },
    ],
    tools: [
        { name: "Python", icon: "Code" },
        { name: "SQL", icon: "Code" },
        { name: "Apache Airflow", icon: "Monitor" },
        { name: "Apache Kafka", icon: "Monitor" },
        { name: "Tableau", icon: "Monitor" },
        { name: "AWS", icon: "Monitor" },
        { name: "PySpark", icon: "Code" },
        { name: "MySQL", icon: "Monitor" },
        { name: "Talend", icon: "Monitor" },
        { name: "Git", icon: "Code" },
    ],
    heroMessage:
        "Start your journey to a global career in Data Engineering! Gain hands-on skills and become an industry-ready professional",
    certificationTitle: "DATA ENGINEER",
};

const BUSINESS_ANALYTICS = {
    title: "Business Analytics Bootcamp",
    description:
        "Business Analytics is the practice of using data, statistical models, and technology to gain actionable insights and support strategic decision-making. It combines data analysis, visualization, and business intelligence to solve real-world problems, identify trends, and improve performance. Business analysts bridge the gap between data and business goals, driving growth and efficiency across industries.",
    duration: "03 Months",
    schedule: "Thursday, Friday",
    startDate: "16 August, 2025",
    format: "Online & Interactive",
    days: "Days: Fri, Sat",
    mode: "Mode: Online & Interactive",
    starting: "Starting: 1 September, 2025",
    price: "PKR 60,000",
    category: "BECOME A CERTIFIED",
    instructor: {
        name: "Amir Jabbar",
        title:
            "Data Top Voice | Business Analyst @Engro Group | Keynote Speaker | Solving Business Problems with Data Analytics",
        image: "/images/courses/Amir Bhai-003.png",
        bio: "Amir is a globally experienced Business Data Analyst, currently serving in the Business Strategy & Development department at Quecko Inc. He empowers organizations with data-driven insights and innovative solutions. With a strong track record in multinational companies, He has driven transformations through analytical techniques such as customer analysis, churn analysis, and product- level analysis.",
        experience:
            "Amir has trained over 100 professionals from top organizations like GSK, HBL, PSO, Nokia, Etisalat, UNDP, and Citi Bank, helping them acquire future-ready skills. Known for his interactive and hands-on teaching style, He delivers industry-relevant training that ensures practical and impactful learning.",
        badges: [
            { text: "Big Data Analytics Expert", icon: "Users", color: "green" },
            { text: "Data Consultant", color: "blue" },
        ],
    },
    modules: [
        {
            title: "Module 1: Introduction to Business Analytics",

            subtopics: [
                {
                    items: [
                        "Overview of Business Analytics and its importance",
                        "Types of analytics: Descriptive, Predictive, Prescriptive",
                        "Role of a Business Analyst",
                        "Real-world applications in various industries",
                    ],
                },
            ],
        },

        {
            title: "Module 2: Fundamentals of Data & Statistics",

            subtopics: [
                {
                    items: [
                        "Types of data: Structured, semi-structured, unstructured",
                        "Data collection & cleaning techniques",
                        "Descriptive statistics: Mean, median, mode, standard deviation",
                        "Probability & basic statistical concepts",
                    ],
                },
            ],
        },

        {
            title: "Module 3: Excel for Business Analytics",

            subtopics: [
                {
                    items: [
                        "Excel formulas and functions",
                        "Data summarization with PivotTables",
                        "Data visualization using charts",
                        "Scenario analysis and forecasting tools",
                    ],
                },
            ],
        },

        {
            title: "Module 4: SQL for Data Extraction",

            subtopics: [
                {
                    items: [
                        "Basics of relational databases",
                        "Writing queries to fetch, filter, and aggregate data",
                        "Joins, subqueries, and views",
                        "Case study using real-world datasets",
                    ],
                },
            ],
        },

        {
            title: "Module 5: Data Visualization & BI Tools",

            subtopics: [
                {
                    items: [
                        "Importance of visual storytelling",
                        "Introduction to Tableau/Power BI",
                        "Creating dashboards and interactive reports",
                        "Choosing the right chart for data types",
                    ],
                },
            ],
        },

        {
            title: "Module 6: Business Metrics & KPIs",

            subtopics: [
                {
                    items: [
                        "Understanding business goals and aligning KPIs",
                        "Metrics for different business functions (marketing, finance, operations)",
                        "ROI, customer churn, conversion rates, etc.",
                        "Building KPI dashboards",
                    ],
                },
            ],
        },

        {
            title: "Module 7: Introduction to Predictive Analytics",

            subtopics: [
                {
                    items: [
                        "Regression analysis basics",
                        "Time-series forecasting",
                        "Classification & clustering concepts",
                        "Intro to machine learning models (no coding focus)",
                    ],
                },
            ],
        },

        {
            title: "Module 8: Case Studies & Domain Applications",

            subtopics: [
                {
                    items: [
                        "Retail: Sales forecasting and inventory optimization",
                        "Finance: Risk assessment and customer segmentation",
                        "Healthcare: Patient data and cost efficiency",
                        "Marketing: Campaign performance and customer lifetime value",
                    ],
                },
            ],
        },

        {
            title: "Module 9: Capstone Project & Career Preparation",

            subtopics: [
                {
                    items: [
                        "Real-world business problem analysis",
                        "Data storytelling and presentation skills",
                        "Resume building & interview prep",
                        "Mock interviews and expert mentoring",
                    ],
                },
            ],
        },
    ],
    tools: [
        // Module 1: Introduction to Business Analytics
        { name: "Draw.io / Lucidchart", icon: "Monitor" },

        // Module 2: Fundamentals of Data & Statistics
        { name: "Microsoft Excel", icon: "Monitor" },
        { name: "Python (for statistics)", icon: "Code" },

        // Module 3: Excel for Business Analytics
        { name: "Microsoft Excel", icon: "Monitor" },
        { name: "Google Sheets", icon: "Monitor" },

        // Module 4: SQL for Data Extraction
        { name: "MySQL", icon: "Monitor" },
        { name: "PostgreSQL", icon: "Monitor" },
        { name: "SQL Server", icon: "Monitor" },

        // Module 5: Data Visualization & BI Tools
        { name: "Power BI", icon: "Monitor" },
        { name: "Tableau", icon: "Monitor" },
        { name: "Looker Studio (Optional)", icon: "Monitor" },

        // Module 6: Business Metrics & KPIs
        { name: "Power BI", icon: "Monitor" },
        { name: "Excel Dashboards", icon: "Monitor" },

        // Module 7: Introduction to Predictive Analytics
        { name: "Python", icon: "Code" },
        { name: "scikit-learn", icon: "Code" },
        { name: "Jupyter Notebooks", icon: "Monitor" },

        // Module 8: Case Studies & Domain Applications
        { name: "Industry Data Sets (Kaggle/UCI)", icon: "Monitor" },

        // Module 9: Capstone Project & Career Prep
        { name: "Git", icon: "Code" },
        { name: "GitHub", icon: "Code" },
        { name: "PowerPoint / Canva (Presentation)", icon: "Monitor" },
    ],
    heroMessage:
        "Start your journey to a global career in Data Engineering! Gain hands-on skills and become an industry-ready professional",
    certificationTitle: "DATA ANALYTICS EXPERT",
};

const MERN_STACK = {
    title: "MERN Stack Development Bootcamp",
    description:
        "Master full-stack web development with MongoDB, Express.js, React, and Node.js. Build modern, scalable web applications from scratch and become a proficient full-stack developer. Learn industry best practices, deployment strategies, and real-world project development.",
    duration: "03 Months",
    schedule: "Monday, Wednesday, Friday",
    startDate: "1 September, 2025",
    format: "Online & Interactive",
    price: "PKR 60,000",
    days: "Days: Mon, Wed, Fri",
    mode: "Mode: Online & Interactive",
    starting: "Starting: 1 September, 2025",
    category: "BECOME A CERTIFIED",
    instructor: {
        name: "MUHAMMAD UBAID UR REHMAN",
        title: "Senior Full Stack Developer | MERN Stack Expert | Tech Lead",
        image: "/images/courses/Amir Bhai-003.png",
        bio: "Muhammad Ubaid is a seasoned full-stack developer with over 6 years of experience in building scalable web applications. He has worked with leading tech companies and has expertise in modern JavaScript frameworks and backend technologies.",
        experience: "Ubaid has mentored over 200 developers and has built numerous production-ready applications. His teaching methodology focuses on practical, project-based learning that prepares students for real-world development challenges.",
    },
    modules: [
        {
            title: "Frontend Development with React",
            description: "Master React.js and modern frontend development practices.",
            subtopics: [
                {
                    category: "React Fundamentals",
                    items: [
                        "Components and JSX",
                        "Props and State Management",
                        "Event Handling and Forms",
                        "React Hooks (useState, useEffect, useContext)",
                    ],
                },
                {
                    category: "Advanced React",
                    items: [
                        "Custom Hooks",
                        "Context API and State Management",
                        "React Router for Navigation",
                        "Performance Optimization",
                    ],
                },
            ],
            tags: ["React", "JavaScript", "Frontend"],
        },
        {
            title: "Backend Development with Node.js & Express",
            description: "Build robust server-side applications and APIs.",
            subtopics: [
                {
                    category: "Node.js Fundamentals",
                    items: [
                        "Node.js Runtime and NPM",
                        "File System and Path Modules",
                        "HTTP Module and Server Creation",
                        "Asynchronous Programming",
                    ],
                },
                {
                    category: "Express.js Framework",
                    items: [
                        "Routing and Middleware",
                        "RESTful API Development",
                        "Authentication and Authorization",
                        "Error Handling and Validation",
                    ],
                },
            ],
            tags: ["Node.js", "Express", "Backend", "API"],
        },
        {
            title: "Database Management with MongoDB",
            description: "Learn NoSQL database design and operations.",
            subtopics: [
                {
                    category: "MongoDB Basics",
                    items: [
                        "Document-based Database Concepts",
                        "CRUD Operations",
                        "Data Modeling and Schema Design",
                        "Indexing and Performance",
                    ],
                },
            ],
            tags: ["MongoDB", "Database", "NoSQL"],
        },
        {
            title: "Full Stack Integration & Deployment",
            description: "Connect frontend and backend, deploy applications.",
            subtopics: [
                {
                    category: "Integration",
                    items: [
                        "API Integration with React",
                        "State Management with Redux",
                        "Authentication Flow",
                        "File Upload and Management",
                    ],
                },
                {
                    category: "Deployment",
                    items: [
                        "Environment Configuration",
                        "Cloud Deployment (Heroku, Vercel)",
                        "Database Hosting (MongoDB Atlas)",
                        "CI/CD Basics",
                    ],
                },
            ],
            tags: ["Deployment", "Integration", "DevOps"],
        },
    ],
    tools: [
        { name: "React", icon: "Code" },
        { name: "Node.js", icon: "Code" },
        { name: "Express.js", icon: "Code" },
        { name: "MongoDB", icon: "Monitor" },
        { name: "JavaScript", icon: "Code" },
        { name: "HTML/CSS", icon: "Code" },
        { name: "Git", icon: "Code" },
        { name: "VS Code", icon: "Monitor" },
        { name: "Postman", icon: "Monitor" },
        { name: "Heroku", icon: "Monitor" },
    ],
    heroMessage:
        "Become a Full Stack Developer! Master the MERN stack and build modern web applications",
    certificationTitle: "MERN STACK DEVELOPER",
};

const DIGITAL_MARKETING = {
    title: "Digital Marketing Bootcamp",
    description:
        "Master the art and science of digital marketing. Learn to create effective marketing campaigns, analyze data, and drive business growth through various digital channels. From social media marketing to SEO and paid advertising, become a complete digital marketing professional.",
    duration: "03 Months",
    schedule: "Tuesday, Thursday",
    startDate: "15 September, 2025",
    format: "Online & Interactive",
    price: "PKR 35,000",
    days: "Days: Tue, Thu",
    mode: "Mode: Online & Interactive",
    starting: "Starting: 15 September, 2025",
    category: "BECOME A CERTIFIED",
    instructor: {
        name: "FARAZ KHAN",
        title: "Digital Marketing Expert | Growth Hacker | Marketing Strategist",
        image: "/images/courses/Amir Bhai-002.png",
        bio: "Faraz Khan is a digital marketing expert with over 8 years of experience in helping businesses grow through strategic digital marketing. He has worked with startups and Fortune 500 companies, driving millions in revenue through data-driven marketing campaigns.",
        experience: "Faraz has trained over 500 marketing professionals and has managed marketing budgets exceeding $2M. His expertise spans across all digital marketing channels with a focus on ROI-driven strategies.",
    },
    modules: [
        {
            title: "Digital Marketing Fundamentals",
            description: "Understanding the digital marketing landscape and consumer behavior.",
            subtopics: [
                {
                    category: "Marketing Basics",
                    items: [
                        "Digital Marketing Overview",
                        "Consumer Journey and Touchpoints",
                        "Marketing Funnel and Conversion",
                        "KPIs and Metrics",
                    ],
                },
            ],
            tags: ["Marketing", "Strategy", "Analytics"],
        },
        {
            title: "Search Engine Optimization (SEO)",
            description: "Master organic search visibility and website optimization.",
            subtopics: [
                {
                    category: "SEO Fundamentals",
                    items: [
                        "Keyword Research and Analysis",
                        "On-Page SEO Optimization",
                        "Technical SEO",
                        "Link Building Strategies",
                    ],
                },
            ],
            tags: ["SEO", "Content", "Analytics"],
        },
        {
            title: "Social Media Marketing",
            description: "Build brand presence and engage audiences on social platforms.",
            subtopics: [
                {
                    category: "Social Media Strategy",
                    items: [
                        "Platform-Specific Strategies",
                        "Content Creation and Curation",
                        "Community Management",
                        "Social Media Advertising",
                    ],
                },
            ],
            tags: ["Social Media", "Content", "Advertising"],
        },
        {
            title: "Paid Advertising (PPC)",
            description: "Master Google Ads, Facebook Ads, and other paid channels.",
            subtopics: [
                {
                    category: "PPC Campaigns",
                    items: [
                        "Google Ads Setup and Management",
                        "Facebook and Instagram Ads",
                        "Campaign Optimization",
                        "Budget Management and ROI",
                    ],
                },
            ],
            tags: ["PPC", "Google Ads", "Facebook Ads"],
        },
        {
            title: "Email Marketing & Automation",
            description: "Build effective email campaigns and marketing automation.",
            subtopics: [
                {
                    category: "Email Marketing",
                    items: [
                        "Email Campaign Strategy",
                        "List Building and Segmentation",
                        "Automation Workflows",
                        "A/B Testing and Optimization",
                    ],
                },
            ],
            tags: ["Email Marketing", "Automation", "CRM"],
        },
        {
            title: "Analytics & Data-Driven Marketing",
            description: "Measure, analyze, and optimize marketing performance.",
            subtopics: [
                {
                    category: "Marketing Analytics",
                    items: [
                        "Google Analytics Setup and Analysis",
                        "Conversion Tracking",
                        "Attribution Modeling",
                        "Reporting and Insights",
                    ],
                },
            ],
            tags: ["Analytics", "Data", "Reporting"],
        },
    ],
    tools: [
        { name: "Google Analytics", icon: "Monitor" },
        { name: "Google Ads", icon: "Monitor" },
        { name: "Facebook Ads Manager", icon: "Monitor" },
        { name: "SEMrush", icon: "Monitor" },
        { name: "Mailchimp", icon: "Monitor" },
        { name: "Hootsuite", icon: "Monitor" },
        { name: "Canva", icon: "Monitor" },
        { name: "WordPress", icon: "Monitor" },
        { name: "Google Tag Manager", icon: "Monitor" },
        { name: "Hotjar", icon: "Monitor" },
    ],
    heroMessage:
        "Launch your Digital Marketing career! Master all channels and become a growth-driven marketer",
    certificationTitle: "DIGITAL MARKETING EXPERT",
};

const CYBER_SECURITY = {
    title: "Cyber Security Bootcamp",
    description:
        "Cyber Security is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and cyber threats. This field focuses on implementing defensive measures, monitoring systems for vulnerabilities, and responding to incidents in real time. As cyber threats grow more complex, skilled professionals are in high demand to safeguard sensitive information and maintain digital trust across industries.",
    duration: "03 Months",
    schedule: "Monday, Wednesday, Friday",
    startDate: "16 August, 2025",
    format: "Online & Interactive",
    price: "PKR 60,000",
    days: "Days: Mon, Wed, Fri",
    mode: "Mode: Online & Interactive",
    starting: "Starting: 16 August, 2025",
    category: "BECOME A CERTIFIED",
    instructor: {
        name: "KHURRAM SHAHID",
        title: "Cyber Security Expert | Ethical Hacker | Security Consultant | Protecting Digital Assets",
        image: "/images/courses/Amir Bhai-001.png",
        bio: "Khurram Shahid is a seasoned Cyber Security professional with extensive experience in protecting organizations from digital threats. He specializes in ethical hacking, penetration testing, and security architecture design.",
        experience: "Khurram has helped secure numerous organizations and has trained over 150 professionals in cyber security best practices. His hands-on approach ensures students learn both defensive and offensive security techniques.",
    },
    modules: [
        {
            title: "Introduction to Cyber Security",
            description: "Foundation concepts and principles of cyber security.",
            subtopics: [
                {
                    category: "Core Concepts",
                    items: [
                        "Overview of cyber security concepts",
                        "Types of cyber threats & attacks",
                        "Importance of cyber security in the digital world",
                        "Cyber security principles: CIA Triad (Confidentiality, Integrity, Availability)",
                    ],
                },
            ],
            tags: ["Security", "Fundamentals", "CIA Triad"],
        },
        {
            title: "Networking Fundamentals",
            description: "Understanding network protocols and security.",
            subtopics: [
                {
                    category: "Network Basics",
                    items: [
                        "OSI & TCP/IP models",
                        "IP addressing, DNS, ports & protocols",
                        "Firewalls, proxies, and VPNs",
                        "Network devices and security zones",
                    ],
                },
            ],
            tags: ["Networking", "Protocols", "Firewalls"],
        },
        {
            title: "Ethical Hacking & Penetration Testing",
            description: "Learn ethical hacking techniques and penetration testing.",
            subtopics: [
                {
                    category: "Ethical Hacking",
                    items: [
                        "Phases of ethical hacking",
                        "Footprinting, scanning, enumeration",
                        "Exploitation and post-exploitation techniques",
                        "Kali Linux and Metasploit framework",
                    ],
                },
            ],
            tags: ["Ethical Hacking", "Penetration Testing", "Kali Linux"],
        },
    ],
    tools: [
        { name: "Kali Linux", icon: "Monitor" },
        { name: "Metasploit", icon: "Code" },
        { name: "Wireshark", icon: "Monitor" },
        { name: "Nmap", icon: "Monitor" },
        { name: "Burp Suite", icon: "Monitor" },
        { name: "OWASP ZAP", icon: "Monitor" },
        { name: "Python", icon: "Code" },
        { name: "Git", icon: "Code" },
    ],
    heroMessage:
        "Start your journey to a global career in Cyber Security! Gain hands-on skills and become an industry-ready professional",
    certificationTitle: "CYBER SECURITY EXPERT",
};

const MOBILE_DEVELOPMENT = {
    title: "Mobile App Development (React Native)",
    description:
        "A React Native Mobile App Developer specializes in building cross-platform mobile applications for iOS and Android using JavaScript and the React Native framework. They create high-performance, user-friendly apps with native-like experiences, handling everything from UI design to backend integration.",
    duration: "03 Months",
    schedule: "Monday, Wednesday, Friday",
    startDate: "16 August, 2025",
    format: "Online & Interactive",
    price: "PKR 40,000",
    days: "Days: Mon, Wed, Fri",
    mode: "Mode: Online & Interactive",
    starting: "Starting: 16 August, 2025",
    category: "BECOME A CERTIFIED",
    instructor: {
        name: "KHURRAM SHAHID",
        title: "Mobile App Development Expert | React Native Specialist | Industry Mentor",
        image: "/images/courses/Amir Bhai-002.png",
        bio: "Khurram Shahid is a skilled Mobile App Developer with extensive experience in building cross-platform mobile applications using React Native. With a strong foundation in frontend and backend integration, he has delivered high-performance apps for startups and enterprises alike.",
        experience: "He has successfully trained professionals from leading organizations and has a passion for simplifying complex concepts through project-based learning. Known for his interactive sessions, Khurram ensures that learners build production-ready mobile applications.",
    },
    modules: [
        {
            title: "React Native Fundamentals",
            description: "Master the basics of React Native development.",
            subtopics: [
                {
                    category: "Getting Started",
                    items: [
                        "What is React Native?",
                        "Cross-platform mobile development concepts",
                        "Setting up development environment (Expo CLI & React Native CLI)",
                        "Creating your first React Native app",
                    ],
                },
            ],
            tags: ["React Native", "Mobile", "Cross-platform"],
        },
        {
            title: "Navigation and State Management",
            description: "Learn navigation patterns and state management in React Native.",
            subtopics: [
                {
                    category: "Navigation",
                    items: [
                        "Installing React Navigation",
                        "Stack, Tab, Drawer navigation",
                        "Passing data between screens",
                        "Deep linking and screen transitions",
                    ],
                },
                {
                    category: "State Management",
                    items: [
                        "Context API",
                        "Redux: Actions, Reducers, Store",
                        "Using Redux Toolkit (RTK)",
                        "Local storage (AsyncStorage)",
                    ],
                },
            ],
            tags: ["Navigation", "Redux", "State Management"],
        },
        {
            title: "App Deployment & Advanced Features",
            description: "Deploy apps and implement advanced mobile features.",
            subtopics: [
                {
                    category: "Device APIs",
                    items: [
                        "Accessing device features: Camera, Geolocation, Vibration",
                        "Push notifications (Firebase/OneSignal)",
                        "Permissions and background tasks",
                        "API Integration with REST and GraphQL",
                    ],
                },
                {
                    category: "Deployment",
                    items: [
                        "Building and deploying apps to Play Store & App Store",
                        "App testing (manual & automated)",
                        "Versioning, signing, and OTA updates",
                        "Performance optimization",
                    ],
                },
            ],
            tags: ["Deployment", "Device APIs", "Performance"],
        },
    ],
    tools: [
        { name: "React Native", icon: "Monitor" },
        { name: "JavaScript", icon: "Code" },
        { name: "Expo", icon: "Monitor" },
        { name: "React Navigation", icon: "Monitor" },
        { name: "Redux Toolkit", icon: "Code" },
        { name: "Firebase", icon: "Monitor" },
        { name: "VS Code", icon: "Monitor" },
        { name: "Git", icon: "Code" },
    ],
    heroMessage:
        "Start your journey to a global career in Mobile App Development! Build cross-platform apps with React Native",
    certificationTitle: "MOBILE APP DEVELOPER",
};

const WEB_DESIGN_DEVELOPMENT = {
    title: "Web Design & Development Bootcamp",
    description:
        "Master the complete web development stack from frontend design to backend development. Learn modern web technologies, responsive design principles, and full-stack development practices to build professional websites and web applications.",
    duration: "05 Months",
    schedule: "Tuesday, Thursday, Saturday",
    startDate: "16 August, 2025",
    format: "Online & Interactive",
    price: "PKR 40,000",
    days: "Days: Tue, Thu, Sat",
    mode: "Mode: Online & Interactive",
    starting: "Starting: 16 August, 2025",
    category: "BECOME A CERTIFIED",
    instructor: {
        name: "MUHAMMAD UBAID UR REHMAN",
        title: "Full Stack Developer | Web Design Expert | UI/UX Specialist",
        image: "/images/courses/Amir Bhai-003.png",
        bio: "Muhammad Ubaid is a full-stack web developer with expertise in modern web technologies and design principles. He has created numerous websites and web applications for various industries.",
        experience: "Ubaid has trained over 300 students in web development and design. His comprehensive approach covers both technical skills and design thinking, ensuring students can create both functional and beautiful web experiences.",
    },
    modules: [
        {
            title: "Frontend Development Fundamentals",
            description: "Master HTML, CSS, and JavaScript for modern web development.",
            subtopics: [
                {
                    category: "Core Technologies",
                    items: [
                        "HTML5 semantic markup and structure",
                        "CSS3 styling, animations, and responsive design",
                        "JavaScript ES6+ fundamentals and DOM manipulation",
                        "Modern CSS frameworks (Bootstrap, Tailwind CSS)",
                    ],
                },
            ],
            tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        },
        {
            title: "Modern Frontend Frameworks",
            description: "Learn React.js and modern frontend development practices.",
            subtopics: [
                {
                    category: "React Development",
                    items: [
                        "React components, props, and state",
                        "React Hooks and lifecycle methods",
                        "State management with Context API",
                        "React Router for single-page applications",
                    ],
                },
            ],
            tags: ["React", "Components", "SPA"],
        },
        {
            title: "Backend Development & Deployment",
            description: "Build server-side applications and deploy web projects.",
            subtopics: [
                {
                    category: "Backend Basics",
                    items: [
                        "Node.js and Express.js fundamentals",
                        "RESTful API development",
                        "Database integration (MongoDB, MySQL)",
                        "Authentication and authorization",
                    ],
                },
                {
                    category: "Deployment",
                    items: [
                        "Version control with Git and GitHub",
                        "Web hosting and domain management",
                        "Cloud deployment (Netlify, Vercel, Heroku)",
                        "Performance optimization and SEO",
                    ],
                },
            ],
            tags: ["Node.js", "APIs", "Deployment", "Git"],
        },
    ],
    tools: [
        { name: "HTML5", icon: "Code" },
        { name: "CSS3", icon: "Code" },
        { name: "JavaScript", icon: "Code" },
        { name: "React", icon: "Code" },
        { name: "Node.js", icon: "Code" },
        { name: "MongoDB", icon: "Monitor" },
        { name: "Git", icon: "Code" },
        { name: "VS Code", icon: "Monitor" },
        { name: "Figma", icon: "Monitor" },
        { name: "Bootstrap", icon: "Code" },
    ],
    heroMessage:
        "Master Web Design & Development! Create stunning, responsive websites and web applications",
    certificationTitle: "WEB DEVELOPER",
};

const BUSINESS_DEVELOPMENT = {
    title: "Business Development Bootcamp",
    description:
        "Learn strategic business development skills to drive growth, build partnerships, and create value for organizations. Master the art of identifying opportunities, developing business strategies, and executing growth initiatives in today's competitive market.",
    duration: "01 Month",
    schedule: "Thursday, Friday",
    startDate: "16 August, 2025",
    format: "Online & Interactive",
    price: "PKR 20,000",
    days: "Days: Thu, Fri",
    mode: "Mode: Online & Interactive",
    starting: "Starting: 16 August, 2025",
    category: "BECOME A CERTIFIED",
    instructor: {
        name: "AMIR JABBAR",
        title: "Business Development Expert | Strategic Growth Consultant | Market Analysis Specialist",
        image: "/images/courses/Amir Bhai-001.png",
        bio: "Amir Jabbar is a seasoned business development professional with extensive experience in driving organizational growth and building strategic partnerships across various industries.",
        experience: "Amir has helped numerous startups and established companies achieve significant growth through strategic business development initiatives. His practical approach focuses on real-world application of business development principles.",
    },
    modules: [
        {
            title: "Business Development Fundamentals",
            description: "Core concepts and strategies for business growth.",
            subtopics: [
                {
                    category: "Strategy & Planning",
                    items: [
                        "Business development vs sales: key differences",
                        "Market research and opportunity identification",
                        "Competitive analysis and positioning",
                        "Business model development and validation",
                    ],
                },
            ],
            tags: ["Strategy", "Market Research", "Business Models"],
        },
        {
            title: "Partnership & Relationship Building",
            description: "Build strategic partnerships and maintain business relationships.",
            subtopics: [
                {
                    category: "Partnerships",
                    items: [
                        "Identifying and evaluating potential partners",
                        "Negotiation strategies and deal structuring",
                        "Partnership agreements and legal considerations",
                        "Managing and nurturing business relationships",
                    ],
                },
            ],
            tags: ["Partnerships", "Negotiation", "Relationships"],
        },
        {
            title: "Growth Execution & Metrics",
            description: "Execute growth strategies and measure success.",
            subtopics: [
                {
                    category: "Execution",
                    items: [
                        "Growth hacking techniques and methodologies",
                        "KPI development and performance tracking",
                        "Revenue optimization strategies",
                        "Scaling business operations effectively",
                    ],
                },
            ],
            tags: ["Growth Hacking", "KPIs", "Revenue", "Scaling"],
        },
    ],
    tools: [
        { name: "CRM Systems", icon: "Monitor" },
        { name: "Google Analytics", icon: "Monitor" },
        { name: "LinkedIn Sales Navigator", icon: "Monitor" },
        { name: "HubSpot", icon: "Monitor" },
        { name: "Salesforce", icon: "Monitor" },
        { name: "Excel", icon: "Monitor" },
        { name: "PowerPoint", icon: "Monitor" },
        { name: "Slack", icon: "Monitor" },
    ],
    heroMessage:
        "Accelerate your Business Development career! Master growth strategies and partnership building",
    certificationTitle: "BUSINESS DEVELOPMENT SPECIALIST",
};

const AIRLINE_RESERVATION = {
    title: "Airline Reservation System Bootcamp",
    description:
        "Master the airline industry's reservation systems and travel technology. Learn to operate Global Distribution Systems (GDS), understand airline operations, and develop skills in travel booking, ticketing, and customer service in the aviation industry.",
    duration: "02 Months",
    schedule: "Monday, Friday",
    startDate: "16 August, 2025",
    format: "Online & Interactive",
    price: "PKR 25,000",
    days: "Days: Mon, Fri",
    mode: "Mode: Online & Interactive",
    starting: "Starting: 16 August, 2025",
    category: "BECOME A CERTIFIED",
    instructor: {
        name: "M S KHAN YOUSAFZAI",
        title: "Aviation Industry Expert | GDS Specialist | Travel Technology Consultant",
        image: "/images/courses/Amir Bhai-002.png",
        bio: "M S Khan Yousafzai is an experienced aviation professional with deep expertise in airline reservation systems, GDS operations, and travel industry technology.",
        experience: "With over 15 years in the aviation industry, Khan has trained hundreds of professionals in airline operations and reservation systems. His practical experience covers all major GDS platforms and airline operational procedures.",
    },
    modules: [
        {
            title: "Aviation Industry Overview",
            description: "Understanding the airline industry and its ecosystem.",
            subtopics: [
                {
                    category: "Industry Basics",
                    items: [
                        "Airline industry structure and key players",
                        "IATA codes, airport codes, and airline designators",
                        "Aircraft types and seating configurations",
                        "Airline alliances and partnerships",
                    ],
                },
            ],
            tags: ["Aviation", "IATA", "Airlines"],
        },
        {
            title: "Global Distribution Systems (GDS)",
            description: "Master GDS operations for airline reservations.",
            subtopics: [
                {
                    category: "GDS Operations",
                    items: [
                        "Introduction to Amadeus, Sabre, and Galileo",
                        "Flight search and availability checking",
                        "Booking creation and modification",
                        "Ticketing and payment processing",
                    ],
                },
            ],
            tags: ["GDS", "Amadeus", "Sabre", "Booking"],
        },
        {
            title: "Customer Service & Operations",
            description: "Provide excellent customer service in airline operations.",
            subtopics: [
                {
                    category: "Service Excellence",
                    items: [
                        "Handling customer inquiries and complaints",
                        "Baggage policies and special services",
                        "Flight changes, cancellations, and refunds",
                        "Travel documentation and visa requirements",
                    ],
                },
            ],
            tags: ["Customer Service", "Operations", "Travel Documentation"],
        },
    ],
    tools: [
        { name: "Amadeus GDS", icon: "Monitor" },
        { name: "Sabre GDS", icon: "Monitor" },
        { name: "Galileo GDS", icon: "Monitor" },
        { name: "IATA BSP", icon: "Monitor" },
        { name: "Airline CRS", icon: "Monitor" },
        { name: "Travel Portal", icon: "Monitor" },
    ],
    heroMessage:
        "Launch your Aviation career! Master airline reservation systems and travel technology",
    certificationTitle: "AIRLINE RESERVATION SPECIALIST",
};

export const COURSES = [
    DATA_SCIENCE,
    DATA_ANALYTICS,
    DATA_ENGINEERING,
    BUSINESS_ANALYTICS,
    MERN_STACK,
    // DIGITAL_MARKETING,
    CYBER_SECURITY,
    // MOBILE_DEVELOPMENT,
    // WEB_DESIGN_DEVELOPMENT,
    // BUSINESS_DEVELOPMENT,
    // AIRLINE_RESERVATION,
];
