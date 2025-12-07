import { Content, Language } from './types';

export const TEXT_CONTENT: Record<Language, Content> = {
  [Language.EN]: {
    nav: {
      home: "Home",
      about: "About Us",
      curriculum: "IGCSE Program",
      contact: "Contact",
      apply: "Enquire Now"
    },
    hero: {
      title: "Unlock the World with Cambridge IGCSE",
      subtitle: "At Sunrise Education, we make international education fun, easy to understand, and effective. Your pathway to global success starts in Klang.",
      cta: "Book a Free Assessment"
    },
    intro: {
      title: "Why Sunrise Education?",
      text: "We believe education shouldn't be boring. By combining the rigorous Cambridge IGCSE syllabus with engaging teaching methods, we help students fall in love with learning while achieving excellent results."
    },
    features: [
      {
        title: "Global Passport",
        description: "The Cambridge IGCSE is the world's most popular international qualification for 14 to 16 year olds.",
        icon: "globe"
      },
      {
        title: "Fun & Engaging",
        description: "Say goodbye to rote memorization. We use interactive methods to make complex topics easy to grasp.",
        icon: "smile"
      },
      {
        title: "Personal Focus",
        description: "Small class sizes ensure every student gets the attention they need to shine.",
        icon: "sprout"
      }
    ],
    curriculum: {
      title: "Our Pathway",
      subtitle: "A seamless journey from Primary basics to IGCSE mastery",
      primary: {
        title: "Cambridge Primary (Year 1-6)",
        years: "Ages 7 - 12",
        description: "We build strong foundations in English, Math, and Science without the stress. Our classes are designed to be active and curiosity-driven.",
        highlights: ["Cambridge English", "Fun Mathematics", "Hands-on Science", "Creative Arts"]
      },
      secondary: {
        title: "Secondary & IGCSE (Year 7-11)",
        years: "Ages 13 - 17",
        description: "Prepare for the O-Levels with confidence. We simplify tough concepts in Physics, Chemistry, and Business so students can ace their exams.",
        highlights: ["IGCSE O-Level Certification", "Science & Business Streams", "Exam Technique Mastery", "Critical Thinking"]
      }
    },
    cta: {
      title: "Start Your IGCSE Journey Today",
      text: "Don't just study hard, study smart with Sunrise Education. Intake is open now!",
      button: "WhatsApp Us"
    },
    chatbot: {
      welcome: "Hi! I'm the Sunrise Assistant ☀️. Ask me about our IGCSE subjects, fees, or location in Klang!",
      placeholder: "Ask about fees, subjects...",
      send: "Send",
      thinking: "Thinking..."
    }
  },
  [Language.CN]: {
    nav: {
      home: "首页",
      about: "关于我们",
      curriculum: "IGCSE 课程",
      contact: "联系我们",
      apply: "立即咨询"
    },
    hero: {
      title: "剑桥 IGCSE 国际课程，开启世界之门",
      subtitle: "在 Sunrise Education 旭日教育，我们让国际教育变得生动有趣、浅显易懂。您的孩子通往世界的起点，就在巴生。",
      cta: "预约免费评估"
    },
    intro: {
      title: "为什么选择 Sunrise Education?",
      text: "我们相信教育不应是枯燥的。通过将严谨的剑桥 IGCSE 课程与生动的教学方法相结合，我们帮助学生爱上学习，同时取得优异成绩。"
    },
    features: [
      {
        title: "全球通行证",
        description: "剑桥 IGCSE 是全球最受欢迎的 14 至 16 岁国际资格证书，受顶尖大学认可。",
        icon: "globe"
      },
      {
        title: "生动有趣",
        description: "告别死记硬背！我们采用互动式教学，让复杂的知识点变得简单易懂。",
        icon: "smile"
      },
      {
        title: "小班制关注",
        description: "坚持小班教学，确保每一位学生都能得到老师的充分关注。",
        icon: "sprout"
      }
    ],
    curriculum: {
      title: "升学路径",
      subtitle: "从小学启蒙到 IGCSE 卓越的一站式旅程",
      primary: {
        title: "剑桥小学课程 (1-6年级)",
        years: "7 - 12 岁",
        description: "我们在零压力的环境下，为英语、数学和科学打下坚实基础。我们的课堂充满互动与探索乐趣。",
        highlights: ["剑桥英语", "趣味数学", "实践科学", "创意艺术"]
      },
      secondary: {
        title: "中学与 IGCSE (7-11年级)",
        years: "13 - 17 岁",
        description: "自信备战 O-Level 考试。我们将物理、化学和商业等复杂概念简单化，助学生轻松拿下高分。",
        highlights: ["IGCSE O-Level 文凭", "理科与商科分流", "应试技巧掌握", "批判性思维"]
      }
    },
    cta: {
      title: "今天就开始您的 IGCSE 旅程",
      text: "不仅要努力学习，更要聪明学习。Sunrise Education 招生火热进行中！",
      button: "联系我们"
    },
    chatbot: {
      welcome: "你好！我是 Sunrise 助手 ☀️。关于 IGCSE 学费、科目或我们在巴生的位置，尽管问我！",
      placeholder: "询问学费、科目...",
      send: "发送",
      thinking: "正在思考..."
    }
  }
};