// ============================================================
// 站点内容配置中心
// 替换为真实简历信息时，只需修改本文件即可全站生效
// ============================================================
export const site = {
  logo: 'PORTFOLIO',
  name: '孙文青',
  nameEn: 'SUN WENQING',
  role: '视觉设计师 / AI 设计师 / 品牌设计师',
  heroTag: 'PORTFOLIO © 2026 — VISUAL / IMAGE / AI',
  available: 'ACCEPTING NEW PROJECTS',
  heroLines: [
    { text: '视觉设计', style: 'solid' },
    { text: '影像创作', style: 'outline' },
    { text: 'AI 生成', style: 'accent' },
  ],
  heroSub:
    '非常具备自主学习能力的个人创作者。从短视频运营与专业摄影摄像出发，如今主攻 AIGC —— 用克制的秩序与大胆的想象，交付从剧本到成片的每一帧。',
  nav: [
    { label: '关于', href: '#about' },
    { label: '项目', href: '#projects' },
    { label: '优势', href: '#strengths' },
    { label: '联系', href: '#contact' },
  ],
  marquee: [
    '视觉设计 VISUAL',
    '品牌识别 BRANDING',
    'AI 设计 AI DESIGN',
    '短视频运营 OPERATION',
    '摄影摄像 FILMING',
    'AIGC 全流程 FULL-PIPELINE',
  ],
  about: {
    sectionLabel: '01 / ABOUT',
    sectionTitle: '关于我',
    intro: '我相信好的内容，是理性秩序与感性想象的平衡。',
    bio: '孙文青，2003 年生，现居济南。深耕短视频与影像创作：具备丰富的从 0 到 1 起号经验，精通各个类目账号的运营方法论，个人账号积累 5 万+ 粉丝，曾以两个月起号周期实现点赞突破 100 万；作为专业摄影摄像师，精通市面主流后期软件，并善于将 AI 工具融入后期流程，交付让客户满意的效果。现在主攻 AIGC 方向，从剧本编辑到成片制作，一人即可完成全流程，经验丰富；带的学员近百人。',
    photoCaption: '孙文青 SUN WENQING — 2003 年生 · 现居济南',
    contacts: [
      { label: 'EMAIL', value: '3107547185@qq.com', href: 'mailto:3107547185@qq.com' },
      { label: 'LOCATION', value: '中国 · 济南' },
    ],
    stats: [
      { value: '5', suffix: '万+', label: '个人账号粉丝' },
      { value: '100', suffix: '万+', label: '短视频点赞突破' },
      { value: '2', suffix: '个月', label: '0 → 1 起号周期' },
      { value: '1', suffix: '人', label: '全流程独立交付' },
    ],
  },
  projects: {
    sectionLabel: '02 / SELECTED WORKS',
    sectionTitle: '精选项目',
    sectionNote: '2024 — 2026',
    items: [
      {
        type: 'video',
        src: '/assets/video/work-01.mp4',
        poster: '/assets/images/poster-01.jpg',
        title: '原创 AIGC 御兽打斗短片',
        tags: ['AIGC', '原创短片'],
        year: '2026',
      },
      {
        type: 'video',
        src: '/assets/video/work-02.mp4',
        poster: '/assets/images/poster-02.jpg',
        title: '3D 漫剧情感向短片',
        tags: ['3D 漫剧', '情感'],
        year: '2026',
      },
      {
        title: '遇见美好 · 商业活动拍摄案例',
        tags: ['商业拍摄', '活动主视觉'],
        year: '2026',
        image: '/assets/images/work-03.jpg',
        position: 'bottom',
        ratio: '3 / 4',
      },
      {
        title: '从 0 到 1 · 个人账号内容样本',
        tags: ['短视频运营', '起号'],
        year: '2025',
        image: '/assets/images/work-04.jpg',
        position: 'top',
      },
    ],
  },
  strengths: {
    sectionLabel: '03 / CAPABILITIES',
    sectionTitle: '个人优势',
    items: [
      {
        title: '短视频运营与起号',
        desc: '从零到一的起号经验丰富，精通各个类目账号的运营方法论；个人账号 5 万+ 粉丝，两个月起号时间点赞突破一百万。',
        tags: ['起号策略', '内容运营', '数据增长'],
      },
      {
        title: '专业摄影摄像',
        desc: '专业摄影摄像师，精通市面主流后期软件，善于将 AI 结合进后期流程，稳定交付让客户满意的效果。',
        tags: ['拍摄', '剪辑', '调色'],
      },
      {
        title: 'AIGC 全流程创作',
        desc: '现在主攻 AIGC 方向，从剧本编辑、分镜设计到成片制作，一人即可完成全流程，项目经验丰富。',
        tags: ['剧本', '生成', '成片'],
      },
      {
        title: 'AI 工具精通',
        desc: '熟练使用 ChatGPT、Codex、Gemini、千问等各类大模型；生图方向精通 GPT Image、Midjourney 等模型；视频方向熟练掌握 Seedance 系列，并能熟练运用各类视频生成模型，将 AI 深度融入创作全流程。',
        tags: ['大模型', '生图', '视频生成'],
      },
    ],
  },
  contact: {
    sectionLabel: '04 / CONTACT',
    email: '3107547185@qq.com',
    contacts: [
      { label: 'PHONE', value: '17561935794', href: 'tel:17561935794' },
      { label: 'WECHAT', value: '17561935794' },
      { label: 'LOCATION', value: '中国 · 济南' },
    ],
  },
  footer: '© 2026 PORTFOLIO — VISUAL / IMAGE / AI',
}
