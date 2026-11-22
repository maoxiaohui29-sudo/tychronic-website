(function () {
  'use strict';

  /* =========================================================
     Bilingual dictionary — English is the source of truth.
     Values may contain HTML (used with innerHTML on data-i18n nodes).
     ========================================================= */
  var I18N = {
    en: {
      skip: 'Skip to content', skip_aria: 'Skip to content',
      brand_aria: 'Tychronic home', nav_aria: 'Main navigation',
      toggle_aria: 'Toggle navigation', lang_aria: 'Select language',
      nav_solutions: 'Solutions', nav_cases: 'Cases', nav_why: 'Why Tychronic', nav_about: 'About', nav_contact: 'Contact',
      header_cta: 'Get in touch',

      hero_eyebrow: 'Global energy solutions partner',
      hero_h1: 'Charge Ahead<br /><span>Power Beyond</span>',
      hero_sub: 'One partner across EV charging, energy storage and power distribution — working with three established manufacturers.',
      hero_btn1: 'Explore solutions', hero_btn2: 'Talk to us <span aria-hidden="true">→</span>',
      stat1: 'Partner brands', stat2: 'Countries served', stat3: 'Storage system capacity',
      tag1: 'EV Charging', tag2: 'Energy Storage', tag3: 'Power Grid', tag4: 'Microgrid',

      partners_label: 'Working with proven manufacturers',
      partner_sc: 'EV Charging',
      partner_by_name: 'Baiyun Electric', partner_by: 'Power Distribution Equipment',
      partner_xy_name: 'XES', partner_xy: 'Battery Energy Storage',
      sc_kicker: 'StarCharge', by_kicker: 'Baiyun Electric', xy_kicker: 'XES',

      sol_eyebrow: 'Our solutions',
      sol_h2: 'Three brands. One complete energy chain.',
      sol_p: 'From generation to charge point, we bring together the equipment your project needs — sourced, checked and delivered by one dedicated team.',

      sc_index: '01 / EV CHARGING', sc_h3: 'EV Charging Solutions',
      sc_desc: 'A global tier-one provider of EV charging and microgrids, with 700,000+ public charge points across 70+ countries. From 7 kW AC chargers to 720 kW DC fast charging, with power cabinets and liquid-cooled terminals for demanding sites.',
      sc_s1: 'Charging power range', sc_s2: 'Max system power', sc_s3: 'IP rating', sc_s4: 'Public charge points', sc_s5: 'Utility Cabinet',
      sc_f1: 'AC 7 kW to DC 720 kW charging portfolio for global markets, up to 2.56 MW',
      sc_f2: 'DC split chargers, power cabinets and all-liquid-cooled charging terminals',
      sc_f3: 'V2G vehicle-to-grid and microgrid operation, including black start',
      sc_f4: '5 MWh BESS in a 20 ft container: 5,015.96 kWh LFP, 1P104S/1P416S, 12 clusters, 1331.2 V nominal, 0.5P charge/discharge',
      sc_f5: 'Smart liquid cooling, ≥94% round-trip efficiency, IP55, −30°C to 55°C, ≈43 t; certified to IEC 62619, UL 9540A, UL 9540 and NFPA 855',
      quote: 'Request a quote <span aria-hidden="true">→</span>',

      by_index: '02 / POWER DISTRIBUTION', by_h3: 'Power Distribution Equipment',
      by_desc: 'A listed power-equipment group (SSE: 603861) with a complete product chain from 0.4 kV to 1100 kV. Trusted in smart grids, data centres, rail transit and new-energy projects, with equipment shipped to 54 countries.',
      by_s1: 'Full voltage range', by_s2: 'Gas-insulated switchgear', by_s3: 'Countries with deliveries', by_s4: 'Group founded',
      by_f1: 'Medium &amp; low voltage switchgear, ring main units, LV switches',
      by_f2: 'Oil-immersed, dry-type and special transformers',
      by_f3: 'Power capacitors, busway, intelligent components',
      by_f4: 'Data-centre and microgrid power distribution solutions',

      xy_index: '03 / ENERGY STORAGE', xy_h3: 'Commercial storage system',
      xy_desc: 'XES (HKEX: 08328) commercial storage systems: the XES-M125/261-YB 125 kW / 261 kWh all-in-one and the ETANK-5S 261 kWh liquid-cooled cabinet, built on 314 Ah LFP cells.',
      xy_s1: 'System capacity', xy_s2: 'Rated AC output', xy_s3: 'Nominal voltage', xy_s4: 'Cycle life (cycles)',
      xy_f1: 'PV & storage all-in-one · XES-M125/261-YB: 261 kWh LFP (3.2V/314Ah), 125 kW AC output, 250 kW PV input up to 1000 V, 10 MPPT',
      xy_f2: 'Smart liquid cooling, IP54, −25°C to 55°C, 2000 m altitude; 1485×1422×2343 mm, ≈2810 kg',
      xy_f3: 'ETANK-5S: 261 kWh LFP 314 Ah, 832 V (650–949 V), 0.5C charge/discharge, ≥90% system efficiency',
      xy_f4: '8000 cycles / 70% EOL, IP54, −20°C to 55°C, triple fire protection, RS485 / CAN / LAN, ≤70 dB',
      xy_prod_head: 'Featured storage systems',
      xy_prod1: '125 kW / 261 kWh all-in-one storage system',
      xy_prod2: 'ETANK-5S liquid-cooled C&amp;I cabinet, 261 kWh',

      why_eyebrow: 'Why Tychronic', why_h2: 'A single partner for a complex supply chain',
      why_p: 'We make global sourcing of energy equipment straightforward — with technical depth, honest communication and room to grow together.',
      why1_h: 'One-stop sourcing', why1_p: 'Charging, energy storage and switchgear from three established manufacturers — coordinated through one account team.',
      why2_h: 'Global project experience', why2_p: 'Our partner brands deliver into 70+ countries and 54 markets respectively, with certifications and references to match.',
      why3_h: 'Technical, not just trading', why3_p: 'We read the datasheets for you — matching voltage, power, protection and site conditions before a quote ever reaches you.',
      why4_h: 'Built for long-term deals', why4_p: 'Direct, transparent communication and after-sales support — the kind of partner you want when a project runs for years.',

      /* Selected references */
      cases_eyebrow: 'Selected references', cases_h2: 'Real projects, real hardware.',
      cases_p: "Every figure below is taken from our partner brands' own 2026 documents. Source page is shown on each card — nothing is invented.",
      cases_sc_h: 'Charging &amp; storage projects',
      cases_sc_p: 'Utility-scale storage, public and fleet charging, and extreme-environment deployments — all six documented in the StarCharge Group Introduction 2026.',
      cases_more_h: 'More global references', cases_more_p: 'From the same official overview (p.58), listed without further expansion.',
      cases_xy_h: 'Storage &amp; solar deployments',
      cases_xy_p: 'Residential PV-plus-storage systems and commercial &amp; industrial rooftop PV stations, as listed in the XES 2026 product handbook (Xinyi Energy Storage, 08328.HK).',
      cases_res_h: 'Residential PV + storage', cases_cif_h: 'C&amp;I rooftop PV stations',
      cases_res_src: 'Source: XES 2026 handbook · p.12 — typical residential storage applications (document scan)',
      cases_cif_src: 'Source: XES 2026 handbook · p.14 — typical applications (document scan)',

      about_eyebrow: 'About Tychronic', about_h2: 'Energy is changing.<br />We move with it.',
      about_p1: 'Tychronic is an independent sourcing and supply partner for the global new-energy market. We connect developers, EPCs, distributors and operators with equipment from established manufacturers — covering the chain from grid distribution to energy storage and charging.',
      about_p2: 'Our role is practical: understand the site, shortlist the right products, verify the specifications and keep the conversation honest from inquiry to delivery.',
      about_btn: 'Start a conversation',

      contact_eyebrow: 'Contact', contact_h2: "Let's build something that lasts.",
      contact_p: "Tell us about your project — site, power requirements, volume and timeline. We'll come back with a shortlist and an honest quote.",
      contact_email: 'Email', contact_web: 'Website', contact_whatsapp: 'WhatsApp', contact_phone: 'Phone',
      copy_email: 'Copy email', copy_ok: 'Email copied',
      f_name: 'Your name', f_name_ph: 'Full name', f_email: 'Email address',
      f_phone: 'Phone / WhatsApp', f_phone_ph: 'Optional — include country code',
      f_interest: "I'm interested in", opt1: 'EV Charging', opt2: 'Energy Storage', opt3: 'Power Distribution', opt4: 'Microgrid', opt5: 'Multiple / not sure yet',
      f_message: 'Tell us about your project', f_msg_ph: 'Location, power needs, volume, timeline…',
      f_send: 'Send inquiry', form_note_default: "We'll reply to your email shortly.",
      form_err: 'Please fill in your name, a valid email and a short message.',
      form_mail_open: 'Your email app is opening with the message ready to send.',
      form_sending: 'Sending your inquiry…',
      form_sent: "Inquiry sent. We'll get back to you shortly.",
      form_fail: "Couldn't send right now. Please email us directly at",
      foot_slogan: 'Charge Ahead · Power Beyond',
      foot_legal: ' Tychronic. Independent sourcing and supply partner. Partner brand names are used for reference only.',

      /* Mobile app (PWA) */
      app_eyebrow: 'Mobile app',
      app_h2: 'Tychronic, on your phone.',
      app_p: 'Install the site as an app — a real icon on the home screen, full-screen browsing, offline-ready pages. Same content, always in sync, no app store needed.',
      app_badge_android: 'Android',
      app_step_android: 'Open this site in Chrome, then tap <strong>Install app</strong> on the banner.',
      app_badge_iphone: 'iPhone',
      app_step_iphone: 'Open in Safari, tap <strong>Share</strong>, then choose <strong>Add to Home Screen</strong>.',
      app_scan: 'Scan with your phone to install',

      /* Product filter */
      pf_label: 'Filter products',
      pf_none: 'None',
      pf_all: 'All products',
      pf_note: 'Product families based on published specifications. Final model list available on request.',
      pf_empty: 'No products in this range — ask us for the full list.',
      pf_en_note: 'Model names and specifications are listed in English.',

      /* PWA install UI — English */
      pwa_card_title: 'Install it as a phone app',
      pwa_card_desc: 'Once installed, a Tychronic icon appears on your home screen. It opens full-screen with no address bar, and works offline.',
      pwa_btn: 'Install to home screen', pwa_btn_done: 'Installed — open from home screen', pwa_btn_app: 'Already in app mode',
      pwa_sheet_aria: 'Install guide', pwa_close_aria: 'Close', pwa_sheet_h3: 'Install to home screen · takes 1 minute',
      pwa_wx_title: "<b style='color:#9a6a12'>You're in WeChat, which blocks app installs. Step out first:</b>",
      pwa_wx_step: 'Tap <b>···</b> at the top right → <b>Open in browser</b> → in the browser, tap "Install to home screen"',
      pwa_wx_go: 'Copy link and open it in your browser',
      pwa_detected: 'We detected your browser — just follow these steps:',
      pwa_tag_step: 'Steps', pwa_tag_using: 'You are using', pwa_tag_recommend: 'Recommended', pwa_tag_important: 'Important',
      pwa_first_time: '<b>The install prompt will not appear on the first visit.</b> Close this page and open it once more, then tap the button below to install in one step.',
      pwa_path_samsung: 'Tap <b>⋯ (More)</b> at the top right → <b>Add to Home screen</b> → tap <b>Install</b>',
      pwa_path_chrome: 'Tap <b>⋮</b> at the top right → <b>Add to Home screen</b> / Install app → tap Install',
      pwa_path_edge: 'Tap <b>⋯</b> at the bottom centre or top right → <b>Add to phone</b> → Install',
      pwa_path_huawei: 'Tap the bottom <b>⋯ menu</b> → <b>Add to desktop</b>. If unavailable, open this page in Chrome or Samsung Internet',
      pwa_path_xiaomi: 'Tap the bottom <b>☰ menu</b> → <b>Add to desktop</b>. If unavailable, open this page in Chrome',
      pwa_path_oppo: 'Tap the bottom <b>⋯ menu</b> → <b>Add to desktop</b>. If unavailable, open this page in Chrome',
      pwa_path_vivo: 'Tap the bottom <b>☰ menu</b> → <b>Add to desktop</b>. If unavailable, open this page in Chrome',
      pwa_path_ios: 'Tap the <b>Share button</b> at the bottom centre (box with an up arrow) → <b>Add to Home Screen</b> → Add',
      pwa_path_other: 'Look for <b>Add to Home screen / Add to desktop / Install app</b> in your browser menu. If unavailable, use Chrome or Samsung Internet',
      pwa_check_prefix: 'Environment check: ', pwa_both_ok: '  → when both show ✓, close and reopen this page to install in one step',
      pwa_manifest_ok: '✓ Manifest', pwa_manifest_fail: '✗ Manifest (', pwa_manifest_ng: '✗ Manifest',
      pwa_sw_ok: '✓ Offline script active', pwa_sw_pending: '○ Offline script not active (normal on first visit)', pwa_sw_ng: '✗ No offline support',
      pwa_msg_copy: '✓ Link copied. Open it in your phone browser (Chrome / Samsung Internet) and paste into the address bar.',
      pwa_msg_installing: '✓ Installing — look for the Tychronic icon on your home screen.',
      pwa_msg_cancel: 'Cancelled. Tap the button again to install.',
      pwa_msg_detected: '✓ One-tap install is available. Tap the button above.',
      pwa_msg_done: '✓ Installed! Open the Tychronic icon on your home screen.',
      pwa_msg_app: '✓ You are using the installed app.',
      pwa_msg_wechat: 'Apps can\'t be installed inside WeChat — tap the button for steps.',
      pwa_msg_start: 'Tap the button to install; if no prompt appears, a guide will open.'
    },

    zh: {
      skip: '跳到主要内容', skip_aria: '跳到主要内容',
      brand_aria: '泰储云能首页', nav_aria: '主导航',
      toggle_aria: '展开或收起导航', lang_aria: '选择语言',
      nav_solutions: '解决方案', nav_cases: '案例', nav_why: '为什么选我们', nav_about: '关于我们', nav_contact: '联系我们',
      header_cta: '联系我们',

      hero_eyebrow: '全球新能源解决方案合作伙伴',
      hero_h1: '全力向前<br /><span>动力无界</span>',
      hero_sub: '充电桩、储能、输配电，一个窗口全对接——背后是三家成熟制造商。',
      hero_btn1: '看看方案', hero_btn2: '聊聊你的项目 <span aria-hidden="true">→</span>',
      stat1: '合作品牌', stat2: '服务国家和地区', stat3: '储能系统容量',
      tag1: '充电桩', tag2: '储能系统', tag3: '电网配电', tag4: '微电网',

      partners_label: '与成熟制造商携手',
      partner_sc: '电动汽车充电',
      partner_by_name: '白云电气', partner_by: '输配电设备',
      partner_xy_name: '信义储电', partner_xy: '电池储能系统',
      sc_kicker: '星星充电 · StarCharge', by_kicker: '白云电气 · Baiyun Electric', xy_kicker: '信义储电',

      sol_eyebrow: '解决方案',
      sol_h2: '三大品牌，覆盖完整能源链',
      sol_p: '从选型到交付，设备我们帮你配齐、核验、对接，一家搞定。',

      sc_index: '01 / 充电桩', sc_h3: '电动汽车充电',
      sc_desc: '全球头部充电与微电网方案商，公共充电点超 70 万个，覆盖 70 多个国家。从 7kW 交流桩到 720kW 直流快充，功率柜与全液冷终端一应俱全，为严苛场景提供可靠设备。',
      sc_s1: '充电功率范围', sc_s2: '最大系统功率', sc_s3: 'IP 防护等级', sc_s4: '公共充电点', sc_s5: '大储',
      sc_f1: '交流 7kW 至直流 720kW 全系列，最高 2.56MW',
      sc_f2: '直流分体桩、功率柜与全液冷充电终端，覆盖高功率场景',
      sc_f3: 'V2G 车网互动，支持微电网与黑启动',
      sc_f4: '20 尺集装箱 5MWh 储能系统：5015.96kWh 磷酸铁锂电芯，1P104S/1P416S，12 个电池簇，标称电压 1331.2V，0.5P 充放电',
      sc_f5: '智能液冷，往返效率 ≥94%，IP55 防护，−30℃～55℃ 运行，约 43 吨；通过 IEC 62619、UL 9540A、UL 9540、NFPA 855 认证',
      quote: '获取报价 <span aria-hidden="true">→</span>',

      by_index: '02 / 输配电', by_h3: '输配电设备',
      by_desc: '上市电力设备集团（上交所 603861），产品链覆盖 0.4kV 至 1100kV 全电压等级。深耕智能电网、数据中心、轨道交通与新能源项目，设备已发往 54 个国家。',
      by_s1: '全电压等级覆盖', by_s2: '气体绝缘开关设备', by_s3: '已交付国家', by_s4: '集团成立年份',
      by_f1: '中低压开关柜、环网柜、低压开关',
      by_f2: '油浸式、干式及特种变压器',
      by_f3: '电力电容器、母线槽、智能元件',
      by_f4: '数据中心与微电网配电解决方案',

      xy_index: '03 / 储能系统', xy_h3: '工商储能系统',
      xy_desc: '信义储电（08328.HK）工商储能系统：XES-M125/261-YB 光储一体机与 ETANK-5S 工商业液冷储能一体柜，均采用 LFP 314Ah 电芯。',
      xy_s1: '系统容量', xy_s2: '额定交流输出', xy_s3: '标称电压', xy_s4: '循环寿命（次）',
      xy_f1: '光储一体机 · XES-M125/261-YB：261kWh 磷酸铁锂（3.2V/314Ah），125kW 交流输出，250kW 光伏输入（最高 1000V），10 路 MPPT',
      xy_f2: '智能液冷，IP54 防护，−25℃～55℃ 运行，2000m 海拔；1485×1422×2343mm，约 2810kg',
      xy_f3: 'ETANK-5S：261kWh 磷酸铁锂 314Ah，832V（650～949V），0.5C 充放电，系统效率 ≥90%',
      xy_f4: '8000 次循环（70% EOL），IP54，−20℃～55℃，三重消防，RS485 / CAN / LAN 通讯，噪音 ≤70dB',
      xy_prod_head: '重点储能产品',
      xy_prod1: '125kW/261kWh 储能一体机',
      xy_prod2: 'ETANK-5S 工商业液冷储能一体柜，261kWh',

      why_eyebrow: '为什么选我们', why_h2: '复杂供应链，一个合作窗口',
      why_p: '新能源设备采购，我们把它做简单——懂技术，说话实在，也愿意长期合作。',
      why1_h: '一站式采购', why1_p: '充电、储能、开关柜，三家成熟制造商，一个客户经理全程对接。',
      why2_h: '全球项目经验', why2_p: '合作品牌分别覆盖 70+ 国家和 54 个市场，认证与项目案例齐备。',
      why3_h: '懂技术，不只是贸易', why3_p: '我们替你看规格书——报价前先核对电压、功率、防护等级和现场条件。',
      why4_h: '为长期合作而设', why4_p: '沟通直接透明，售后有人管，项目做上几年也省心。',

      /* 精选案例 */
      cases_eyebrow: '精选案例', cases_h2: '真实项目，真实设备。',
      cases_p: '以下每个数字都来自合作品牌 2026 年官方资料，每张卡片标注来源页码，没有任何编造。',
      cases_sc_h: '充电与储能项目',
      cases_sc_p: '公用事业级储能、公共与车队充电、极端环境部署——六个案例均记载于《StarCharge 集团介绍 2026》。',
      cases_more_h: '更多全球案例', cases_more_p: '来自同一份官方资料（第 58 页），未逐项展开。',
      cases_xy_h: '储能与光伏应用',
      cases_xy_p: '户用光储系统与工商业屋顶光伏电站，列于《信义储电 2026 产品手册》（信义储电，08328.HK）。',
      cases_res_h: '户用光伏＋储能', cases_cif_h: '工商业屋顶光伏电站',
      cases_res_src: '来源：信义储电 2026 手册 · 第 12 页 — 典型户用储能应用案例（原始资料扫描件）',
      cases_cif_src: '来源：信义储电 2026 手册 · 第 14 页 — 典型应用案例（原始资料扫描件）',

      about_eyebrow: '关于泰储云能', about_h2: '能源在变。<br />我们跟着变。',
      about_p1: '泰储云能是面向全球新能源市场的独立采购与供应伙伴。我们帮开发商、EPC、经销商和运营商对接成熟制造企业的设备——从电网配电到储能与充电，一条链打通。',
      about_p2: '我们做的事很具体：看懂现场、选对产品、核对参数，从询价到交付都坦诚沟通。',
      about_btn: '聊聊你的项目',

      contact_eyebrow: '联系我们', contact_h2: '一起做点长久的事',
      contact_p: '把项目情况告诉我们——现场条件、功率需求、数量、工期，我们给你选型建议和实在报价。',
      contact_email: '邮箱', contact_web: '网址', contact_whatsapp: 'WhatsApp', contact_phone: '电话',
      copy_email: '复制邮箱', copy_ok: '邮箱已复制',
      f_name: '您的姓名', f_name_ph: '姓名', f_email: '邮箱地址',
      f_phone: '电话 / WhatsApp', f_phone_ph: '选填，请带国家区号',
      f_interest: '感兴趣的产品', opt1: '充电桩', opt2: '储能系统', opt3: '输配电', opt4: '微电网', opt5: '多项 / 暂不确定',
      f_message: '请介绍您的项目', f_msg_ph: '地点、功率需求、数量、周期…',
      f_send: '发送询价', form_note_default: '我们会尽快回复你的邮箱。',
      form_err: '请填写姓名、有效邮箱和简短留言。',
      form_mail_open: '邮件客户端已打开，请发送预填好的邮件。',
      form_sending: '正在发送询价…',
      form_sent: '询价已发送，我们会尽快回复您。',
      form_fail: '暂时发送失败，请直接发邮件至',
      foot_slogan: '全力向前 · 动力无界',
      foot_legal: ' 泰储云能。独立采购与供应合作伙伴。合作品牌名称仅供参考。',

      /* 手机端（PWA） */
      app_eyebrow: '手机应用',
      app_h2: '把 Tychronic 装进手机。',
      app_p: '把本站安装成一个真正的应用——桌面独立图标、全屏浏览、支持离线。内容与网站始终同步，无需应用商店。',
      app_badge_android: '安卓',
      app_step_android: '用 Chrome 打开本站，在横幅上点「<strong>安装应用</strong>」。',
      app_badge_iphone: 'iPhone',
      app_step_iphone: '用 Safari 打开，点「<strong>分享</strong>」，选择「<strong>添加到主屏幕</strong>」。',
      app_scan: '手机扫码，直接安装',

      /* 产品筛选 */
      pf_label: '筛选产品',
      pf_none: '无',
      pf_all: '全部产品',
      pf_note: '以下产品系列依据官方公开资料整理，最终型号清单可索取。',
      pf_empty: '该功率段暂无示意产品，欢迎索取完整清单。',
      pf_en_note: '型号与规格以英文标注。',

      /* PWA install UI */
      pwa_card_title: '把它装成手机 APP',
      pwa_card_desc: '装好后，手机桌面出现「Tychronic」图标；点开是全屏 APP，没有地址栏，断网也能打开。',
      pwa_btn: '安装到手机桌面', pwa_btn_done: '已安装，回桌面打开', pwa_btn_app: '已经是 APP 模式',
      pwa_sheet_aria: '安装引导', pwa_close_aria: '关闭', pwa_sheet_h3: '安装到手机桌面 · 1 分钟完成',
      pwa_wx_title: "<b style='color:#9a6a12'>你现在在微信里——微信禁止安装，先出去：</b>",
      pwa_wx_step: '点微信右上角「<b>···</b>」→「<b>在浏览器打开</b>」→ 在系统浏览器里再点「安装到手机桌面」',
      pwa_wx_go: '复制链接，去浏览器粘贴打开',
      pwa_detected: '已自动识别你的浏览器，跟着做即可：',
      pwa_tag_step: '步骤', pwa_tag_using: '你正在用', pwa_tag_recommend: '推荐路径', pwa_tag_important: '重要',
      pwa_first_time: '<b>第一次打开本页时安装框不会立即生效</b>——请先关掉本页，再重新打开一次，回来点蓝色按钮就能一键弹安装框。',
      pwa_path_samsung: '点右上角 <b>⋯（更多）</b> →「<b>添加到主屏幕</b>」→ 弹窗点「<b>安装</b>」或「添加」',
      pwa_path_chrome: '点右上角 <b>⋮</b> →「<b>添加到主屏幕</b>」/「安装应用」→ 弹窗点「安装」',
      pwa_path_edge: '点底部中间或右上角 <b>⋯</b> →「<b>添加到手机</b>」→「安装」',
      pwa_path_huawei: '点底部 <b>⋯ 菜单</b> →「<b>添加到桌面</b>」。若没有此选项，改用 Chrome/三星浏览器打开本页',
      pwa_path_xiaomi: '点底部 <b>☰ 菜单</b> →「<b>添加到桌面</b>」。若无此选项，改用 Chrome 打开本页',
      pwa_path_oppo: '点底部 <b>⋯ 菜单</b> →「<b>添加到桌面</b>」。若无此选项，改用 Chrome 打开本页',
      pwa_path_vivo: '点底部 <b>☰ 菜单</b> →「<b>添加到桌面</b>」。若无此选项，改用 Chrome 打开本页',
      pwa_path_ios: '点屏幕<b>底部中间的分享按钮</b>（方框+向上箭头）→ 下滑点「<b>添加到主屏幕</b>」→ 右上角「添加」',
      pwa_path_other: '在浏览器菜单里找「<b>添加到主屏幕 / 添加到桌面 / 安装应用</b>」。若找不到，改用 Chrome 或三星浏览器打开本页',
      pwa_check_prefix: '环境自检：', pwa_both_ok: '　→ 两项都 ✓ 时，关掉重开一次本页即可一键安装',
      pwa_manifest_ok: '✓ 安装清单', pwa_manifest_fail: '✗ 安装清单(', pwa_manifest_ng: '✗ 安装清单',
      pwa_sw_ok: '✓ 离线脚本已激活', pwa_sw_pending: '○ 离线脚本未激活（首次访问属正常）', pwa_sw_ng: '✗ 不支持离线脚本',
      pwa_msg_copy: '✓ 链接已复制。打开手机浏览器（Chrome/三星浏览器），粘贴到地址栏访问。',
      pwa_msg_installing: '✓ 正在安装，回到手机桌面找「Tychronic」图标。',
      pwa_msg_cancel: '已取消。想再装一次，点上面的按钮。',
      pwa_msg_detected: '✓ 已检测到可以一键安装，点上面蓝色按钮即可。',
      pwa_msg_done: '✓ 安装完成！回手机桌面点「Tychronic」图标打开。',
      pwa_msg_app: '✓ 你正在用装好的 APP 打开。',
      pwa_msg_wechat: '微信里装不了 APP：点按钮看跳出去的步骤。',
      pwa_msg_start: '点蓝色按钮开始安装；若没有直接弹安装框，会自动弹出引导。'
    }
  };

  /* Extra languages live in langs.js and are merged at runtime. */
  var LANGS = ['en', 'zh', 'ar', 'ru', 'es', 'pt', 'fr', 'de', 'vi'];
  if (window.TYCHRON_EXTRA) {
    LANGS.forEach(function (code) {
      if (window.TYCHRON_EXTRA[code]) {
        I18N[code] = Object.assign({}, I18N.en, window.TYCHRON_EXTRA[code]);
      }
    });
  }

  var META = {
    en: {
      title: 'TYCHRONIC — Charge Ahead. Power Beyond',
      desc: 'Tychronic is your sourcing and supply partner for EV charging, energy storage and power distribution — representing StarCharge, Baiyun Electric and XES for global markets.',
      ogDesc: 'EV charging · Energy storage · Power distribution. Three proven manufacturers, one partner.'
    },
    zh: {
      title: '泰储云能 TYCHRONIC — 全力向前 动力无界',
      desc: '泰储云能是充电桩、储能与输配电的采购与供应合作伙伴，为全球市场对接星星充电、白云电气与信义储电三家成熟制造商。',
      ogDesc: '充电桩 · 储能系统 · 输配电。三家成熟制造商，一个合作窗口。'
    }
  };

  /* =========================================================
     Product catalogue — indicative entries built ONLY from
     published specifications already shown on this page.
     No model numbers are invented. Replace with the official
     SKU list once the agency agreement is finalised.
     Each product: { kw: numeric sort key, band: filter bucket,
                     en, zh }
     ========================================================= */
  if (window.TYCHRON_META) {
    Object.keys(window.TYCHRON_META).forEach(function (code) {
      META[code] = window.TYCHRON_META[code];
    });
  }

  var PRODUCTS = {
    sc: [
      /* AC charging (7–21 kW) */
      { kw: 7,    band: 'ac7',      en: 'Crescent / Artemis smart AC charger, 7 kW',            zh: '弯月 / Artemis 智能交流充电桩，7kW' },
      { kw: 11,   band: 'ac7',      en: 'Artemis AC charger, 11.5 / 19.2 kW',                   zh: 'Artemis 交流充电桩，11.5 / 19.2kW' },
      { kw: 21,   band: 'ac7',      en: 'Crescent smart AC charger, 21 kW',                     zh: '弯月智能交流充电桩，21kW' },
      { kw: 7,    band: 'ac7',      en: 'Xingyue / Aurora / Qimingxing / Liuguang AC chargers', zh: '星跃 / 极光 / 启明星 / 流光交流充电桩' },
      /* V2G */
      { kw: 7,    band: 'v2g',      en: 'V2G all-in-one charger, 7 / 11 kW',                    zh: 'V2G 一体机，7 / 11kW' },
      { kw: 30,   band: 'v2g',      en: 'Gemini III Pro V2G all-in-one, 30 kW',                zh: '双子座三代 Pro V2G 一体机，30kW' },
      { kw: 120,  band: 'v2g',      en: 'Gemini III Pro V2G all-in-one, 120 kW',               zh: '双子座三代 Pro V2G 一体机，120kW' },
      /* DC all-in-one */
      { kw: 60,   band: 'dc60',     en: 'Gemini V3.2 all-in-one DC charger, 60 / 80 kW',       zh: '双子座 V3.2 直流一体充电桩，60 / 80kW' },
      { kw: 120,  band: 'dc120',    en: 'Gemini V3.2 all-in-one DC charger, 120 / 160 kW',     zh: '双子座 V3.2 直流一体充电桩，120 / 160kW' },
      { kw: 180,  band: 'dc120',    en: 'Gemini V3.2 all-in-one DC charger, 180 / 240 kW',     zh: '双子座 V3.2 直流一体充电桩，180 / 240kW' },
      { kw: 150,  band: 'dc120',    en: 'Titan 180 all-in-one fast charger, 120 / 150 / 180 kW',zh: 'Titan 180 一体式快充，120 / 150 / 180kW' },
      { kw: 320,  band: 'dc120',    en: 'Titan 320 high-power all-in-one, 240 / 320 kW',       zh: 'Titan 320 大功率一体机，240 / 320kW' },
      { kw: 400,  band: 'dc400',    en: 'Taurus V5 all-in-one DC charger, 400 kW',             zh: '金牛座 V5 直流一体机，400kW' },
      { kw: 560,  band: 'dc400',    en: 'Taurus V5 all-in-one DC charger, 480 / 560 / 640 kW', zh: '金牛座 V5 直流一体机，480 / 560 / 640kW' },
      /* Split DC */
      { kw: 360,  band: 'split',    en: 'Beidou V5 split DC charger, 360 / 480 kW',           zh: '北斗五代分体式直流充电桩，360 / 480kW' },
      { kw: 720,  band: 'split',    en: 'Beidou V5 split DC charger, 600 / 720 / 800 / 960 kW',zh: '北斗五代分体式直流充电桩，600 / 720 / 800 / 960kW' },
      { kw: 600,  band: 'split',    en: 'Arctic immersion liquid-cooled split DC, 480 / 600 / 720 kW', zh: '北极浸没式液冷分体直流桩，480 / 600 / 720kW' },
      { kw: 960,  band: 'split',    en: 'Beidou power cabinet V5, 720 / 960 / 1440 kW',       zh: '北斗功率柜 V5，720 / 960 / 1440kW' },
      { kw: 720,  band: 'split',    en: 'Beichen IV split DC charger, 480–960 kW',            zh: '北辰四代分体式直流充电桩，480–960kW' },
      /* Ultra-high power */
      { kw: 1440, band: 'ultra',    en: 'Beidou V5 split DC charger, 1200 / 1440 kW',         zh: '北斗五代分体式直流充电桩，1200 / 1440kW' },
      { kw: 2560, band: 'ultra',    en: 'Beidou V5 split DC charger, 1600 / 1920 / 2560 kW',   zh: '北斗五代分体式直流充电桩，1600 / 1920 / 2560kW' },
      { kw: 2400, band: 'ultra',    en: 'Xingjiyuan A medium-voltage direct-connected 2.4 MW charging system', zh: '星纪元 A 中压直挂 2.4MW 智慧箱充系统' },
      /* Charging terminals */
      { kw: 0,    band: 'terminal', en: 'Xinghai all-liquid-cooled terminal V6.0, 600 A',      zh: '星海全液冷终端 V6.0，600A' },
      { kw: 0,    band: 'terminal', en: 'Xinghai single / dual-gun terminal, 1200 A',         zh: '星海单枪 / 双枪终端，1200A' },
      /* Utility-scale storage — shown under "Best" */
      { kw: 5000, band: 'utility',  en: '5 MWh Utility Cabinet · 5,015.96 kWh LFP · 0.5P · ≥94% RTE · IP55 · 20 ft', zh: '5MWh 大储机柜 · 5015.96kWh 磷酸铁锂 · 0.5P · 往返效率 ≥94% · IP55 · 20 尺' },
    ],
    by: [
      { kw: 0.4,   band: '0.4kV',   en: 'Low-voltage switchgear &amp; LV switches, 0.4 kV class', zh: '低压开关柜与低压开关，0.4kV 级' },
      { kw: 10,    band: '10kV',    en: 'Medium-voltage switchgear &amp; ring main units, 10 kV class', zh: '中压开关柜与环网柜，10kV 级' },
      { kw: 35,    band: '35kV',    en: 'Medium-voltage switchgear &amp; transformers, 35 kV class', zh: '中压开关柜与变压器，35kV 级' },
      { kw: 110,   band: '110kV',   en: 'Power transformers &amp; GIS, 110 kV class', zh: '电力变压器与 GIS，110kV 级' },
      { kw: 1100,  band: '1100kV',  en: 'Gas-insulated switchgear (GIS / C-GIS), up to 1100 kV', zh: '气体绝缘开关设备（GIS / C-GIS），最高 1100kV' }
    ],
    xy: [
      /* Two XES products, exactly as documented in the supplied datasheets */
      { kw: 0, band: 'allinone', en: 'XES-M125/261-YB · 261 kWh LFP (3.2V/314Ah) · 125 kW AC output · 250 kW PV input up to 1000 V · 10 MPPT · 832 V · −25°C to 55°C · 2000 m · 1485×1422×2343 mm · ≈2810 kg · smart liquid cooling · IP54', zh: 'XES-M125/261-YB · 261kWh 磷酸铁锂（3.2V/314Ah）· 125kW 交流输出 · 250kW 光伏输入（最高 1000V）· 10 路 MPPT · 832V · −25℃～55℃ · 2000m · 1485×1422×2343mm · 约 2810kg · 智能液冷 · IP54' },
      { kw: 0, band: 'etank', en: 'XES-261YB(5S)-06-07-CE · ETANK-5S liquid-cooled C&amp;I cabinet · 261 kWh LFP 314 Ah · 832 V (650–949 V) · 0.5C · 8000 cycles / 70% EOL · ≥90% system efficiency · triple fire protection · −20°C to 55°C · 980×1330×2251.5 mm · ≈2500 kg · RS485 / CAN / LAN · ≤70 dB · IP54', zh: 'XES-261YB(5S)-06-07-CE · ETANK-5S 工商业液冷储能一体柜 · 261kWh 磷酸铁锂 314Ah · 832V（650～949V）· 0.5C · 8000 次循环（70% EOL）· 系统效率 ≥90% · 三重消防 · −20℃～55℃ · 980×1330×2251.5mm · 约 2500kg · RS485 / CAN / LAN · ≤70dB · IP54' }
    ]
  };

  var PF_BAND_LABELS = {
    sc: {
      'ac7':      { en: 'AC charging · 7–21 kW', zh: '交流充电 · 7–21kW' },
      'v2g':      { en: 'V2G', zh: 'V2G 车网互动' },
      'dc60':     { en: 'DC all-in-one · 60–80 kW', zh: '直流一体 · 60–80kW' },
      'dc120':    { en: 'DC all-in-one · 120–320 kW', zh: '直流一体 · 120–320kW' },
      'dc400':    { en: 'DC all-in-one · 400–640 kW', zh: '直流一体 · 400–640kW' },
      'split':    { en: 'Split DC · 360–960 kW', zh: '分体直流 · 360–960kW' },
      'ultra':    { en: 'Ultra-high power · up to 2.56 MW', zh: '超大功率 · 最高 2.56MW' },
      'terminal': { en: 'Charging terminals', zh: '充电终端' },
      'utility':  { en: 'Utility Cabinet 5 MWh', zh: '5MWh 大储' }
    },
    by: {
      '0.4kV': { en: '0.4 kV', zh: '0.4kV' },
      '10kV': { en: '10 kV', zh: '10kV' },
      '35kV': { en: '35 kV', zh: '35kV' },
      '110kV': { en: '110 kV', zh: '110kV' },
      '1100kV': { en: '1100 kV', zh: '1100kV' }
    },
    xy: {
      'allinone': { en: 'PV & storage all-in-one', zh: '光储一体机' },
      'etank': { en: 'Liquid-cooled C&I storage cabinet', zh: '工商业储能液冷一体柜' }
    }
  };

  if (window.TYCHRON_BANDS) {
    Object.keys(window.TYCHRON_BANDS).forEach(function (lang) {
      Object.keys(window.TYCHRON_BANDS[lang]).forEach(function (brand) {
        PF_BAND_LABELS[brand] = PF_BAND_LABELS[brand] || {};
        Object.keys(window.TYCHRON_BANDS[lang][brand]).forEach(function (band) {
          PF_BAND_LABELS[brand][band] = PF_BAND_LABELS[brand][band] || {};
          PF_BAND_LABELS[brand][band][lang] = window.TYCHRON_BANDS[lang][brand][band];
        });
      });
    });
  }

  /* =========================================================
     Selected references — taken ONLY from the partner brands'
     own 2026 documents (StarCharge Group Introduction pp.52-58,
     XES 2026 product handbook pp.12/14). Project names, places,
     figures and source pages are kept verbatim. No invented data.
     en/zh provided; other languages fall back to en (same as PRODUCTS).
     ========================================================= */
  var CASES = {
    sc: [
      { tag: { en: 'Charging · Norway', zh: '充电 · 挪威' },
        title: { en: 'Supercharge AS — split DC charging', zh: '挪威 Supercharge AS — 分体式直流充电' },
        body: { en: 'A Norway-based charging and energy solution provider. StarCharge supplied split-type DC systems for flexible deployment across commercial charging scenarios.', zh: '挪威本地充电与能源方案商。StarCharge 提供分体式直流系统，适配多种商业充电场景的灵活部署。' },
        stats: [ { v: '32', l: { en: 'Nova V1 360 kW cabinets', zh: 'Nova V1 360kW 功率柜' } }, { v: '54', l: { en: 'Aries V1 dispensers', zh: 'Aries V1 充电终端' } }, { v: '-30°C', l: { en: 'reliable operation', zh: '稳定运行' } } ],
        img: 'norway', src: 'StarCharge Group Introduction 2026 · p.53' },
      { tag: { en: 'Charging · Singapore', zh: '充电 · 新加坡' },
        title: { en: 'LTA Sengkang Bus Depot (BD401)', zh: '新加坡陆路交通管理局 · 盛港巴士场站' },
        body: { en: "Split-type DC charging systems supplied for the electric bus depot charging operations of Singapore's Land Transport Authority.", zh: '为新加坡陆路交通管理局电动巴士场站提供的分体式直流充电系统，支撑场站日常充电运营。' },
        stats: [ { v: '41', l: { en: 'Nova V2 360 kW cabinets', zh: 'Nova V2 360kW 功率柜' } }, { v: '246', l: { en: 'Seraph dispensers', zh: 'Seraph 充电终端' } } ],
        img: 'singapore', src: 'StarCharge Group Introduction 2026 · p.54' },
      { tag: { en: 'Charging · Extreme heat', zh: '充电 · 极端高温' },
        title: { en: 'Turpan — stable 720 kW above 45°C', zh: '吐鲁番 — 45°C 以上稳定输出 720kW' },
        body: { en: 'In Turpan, with ambient above 45°C and ground up to 70°C, the liquid-cooled system delivers stable 720 kW output. Liquid cooling controls thermal load for reliable operation.', zh: '吐鲁番环境温度超过 45°C、地表最高 70°C，液冷系统仍稳定输出 720kW。液冷架构控制热负荷，保障高温高负载下的可靠运行。' },
        stats: [ { v: '720 kW', l: { en: 'stable output', zh: '稳定输出' } }, { v: '>45°C', l: { en: 'ambient', zh: '环境温度' } }, { v: '70°C', l: { en: 'ground', zh: '地表温度' } } ],
        img: 'turpan', src: 'StarCharge Group Introduction 2026 · p.52' },
      { tag: { en: 'V2G · Australia', zh: 'V2G · 澳大利亚' },
        title: { en: 'Residential V2G with BYD Atto 3', zh: '澳大利亚住宅 V2G 项目' },
        body: { en: 'A BYD Atto 3 connected to a StarCharge Halo V2G charger. The initiative deploys 50 V2G chargers across residential properties, letting EVs feed energy back to the grid.', zh: '比亚迪 Atto 3 接入 StarCharge Halo V2G 充电桩。该计划将在住宅部署 50 台 V2G 充电桩，让电动车在需要时向电网回馈电能。' },
        stats: [ { v: '50', l: { en: 'V2G chargers planned', zh: '计划部署 V2G 充电桩' } }, { v: 'Halo', l: { en: 'V2G charger', zh: 'V2G 充电桩' } } ],
        img: 'australia', src: 'StarCharge Group Introduction 2026 · p.55' },
      { tag: { en: 'BESS · Bulgaria', zh: '储能 · 保加利亚' },
        title: { en: 'Plovdiv 20 MWh utility-scale BESS', zh: '保加利亚普罗夫迪夫 20MWh 大型储能' },
        body: { en: "StarCharge's first utility-scale BESS: 10 MW / 20 MWh using 5 MWh centralized ESS. Scheduled for commissioning in April 2026.", zh: 'StarCharge 首个公用事业级储能项目：10MW/20MWh，采用 5MWh 集中式储能系统，计划 2026 年 4 月投运。' },
        stats: [ { v: '10 / 20 MWh', l: { en: 'MW / capacity', zh: '功率 / 容量' } }, { v: '5 MWh', l: { en: 'centralized ESS', zh: '集中式储能' } }, { v: 'Apr 2026', l: { en: 'commissioning planned', zh: '计划投运' } } ],
        img: 'bulgaria', src: 'StarCharge Group Introduction 2026 · p.56' },
      { tag: { en: 'BESS · Latvia', zh: '储能 · 拉脱维亚' },
        title: { en: 'Latvia 50 MWh BESS', zh: '拉脱维亚 50MWh 储能项目' },
        body: { en: '25 MW / 50 MWh with 5 MWh centralized ESS. A customized design for site constraints was approved by local authorities; delivery scheduled Q2 2026 — StarCharge’s first utility-scale storage contract in Europe in 2026.', zh: '25MW/50MWh，采用 5MWh 集中式储能。针对现场条件定制设计并获当地主管部门批准，计划 2026 年二季度交付，为 StarCharge 2026 年在欧洲首个签约的大型储能项目。' },
        stats: [ { v: '25 / 50 MWh', l: { en: 'MW / capacity', zh: '功率 / 容量' } }, { v: 'Q2 2026', l: { en: 'delivery planned', zh: '计划交付' } }, { v: '5 MWh', l: { en: 'centralized ESS', zh: '集中式储能' } } ],
        img: 'latvia', src: 'StarCharge Group Introduction 2026 · p.57' }
    ],
    global: [
      { place: { en: 'Philippines', zh: '菲律宾' }, desc: { en: 'With Shell — first nationwide DC fast-charging station', zh: '与 Shell 合作建成菲律宾首个全国性直流快充站' } },
      { place: { en: 'Mexico', zh: '墨西哥' }, desc: { en: 'Electrifying bus routes in Mexico City & Monterrey, 150+ e-buses', zh: '墨西哥城与蒙特雷电动巴士线路，支持 150+ 辆电动巴士' } },
      { place: { en: 'Vietnam', zh: '越南' }, desc: { en: 'With VinFast (Vingroup) — ASEAN’s largest bus charging hub', zh: '与 VinFast（Vingroup）合作建设东盟最大巴士充电枢纽' } },
      { place: { en: 'Norway', zh: '挪威' }, desc: { en: 'Powering Posten Norge’s electric truck fleet', zh: '为挪威邮政电动卡车队提供充电' } },
      { place: { en: 'Singapore', zh: '新加坡' }, desc: { en: 'With Sunseap Group — next-generation energy platform', zh: '与 Sunseap Group 合作新一代能源平台' } },
      { place: { en: 'Tanzania', zh: '坦桑尼亚' }, desc: { en: 'Toto Ceramics', zh: 'Toto 陶瓷' } },
      { place: { en: 'Britain', zh: '英国' }, desc: { en: 'Residential microgrid', zh: '住宅微电网' } }
    ],
    xesRes: [
      { place: { en: 'South Africa · Johannesburg', zh: '南非 · 约翰内斯堡' }, spec: '22 kW / 54 kWh' },
      { place: { en: 'China · Hainan', zh: '中国 · 海南' }, spec: '5.5 kW / 11.52 kWh' },
      { place: { en: 'China · Anhui', zh: '中国 · 安徽' }, spec: '11 kW / 27 kWh' },
      { place: { en: 'Philippines · Metro Manila', zh: '菲律宾 · 马尼拉都会区' }, spec: '15.4 kW / 27 kWh' }
    ],
    xesCif: [
      { en: 'Huafeng Huajin Group PV power station', zh: '华峰华锦集团光伏电站项目' },
      { en: 'Oriental Hope Honghe PV power station', zh: '东方希望红河光伏电站项目' },
      { en: 'Jiangsu Xunai PV power station', zh: '江苏徐耐光伏电站项目' },
      { en: 'Anhui Wuhu rail transit station rooftop PV', zh: '安徽芜湖轨道交通车站屋顶光伏项目' },
      { en: 'Malaysia Malacca Industrial Park', zh: '马来西亚马六甲工业园' },
      { en: 'Tianjin Wuqing Industrial Park / Man Wah Furniture Industrial Park', zh: '天津武清区工业园、敏华家具工业园等项目' }
    ]
  };

  var STORAGE_KEY = 'tychron_lang';
  var curLang = 'en';

  function detectLang() {
    // Overseas-facing site: remember an explicit choice, otherwise default to English.
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    return 'en';
  }

  function t(key) {
    var d = I18N[curLang] || I18N.en;
    if (Object.prototype.hasOwnProperty.call(d, key)) return d[key];
    if (Object.prototype.hasOwnProperty.call(I18N.en, key)) return I18N.en[key];
    return key;
  }

  /* ---- Product filter: build options + render matching products ---- */
  function bandsFor(key) {
    var seen = {}, out = [];
    (PRODUCTS[key] || []).forEach(function (p) {
      if (!seen[p.band]) { seen[p.band] = 1; out.push(p.band); }
    });
    return out;
  }

  function bandLabel(key, band) {
    var l = PF_BAND_LABELS[key] && PF_BAND_LABELS[key][band];
    return l ? (l[curLang] || l.en) : band;
  }

  function renderProductFilter(root) {
    var key = root.getAttribute('data-pf');
    var sel = root.querySelector('[data-pf-select]');
    var list = root.querySelector('[data-pf-list]');
    if (!sel || !list || !PRODUCTS[key]) return;

    var chosen = sel.value || 'none';
    // Rebuild options on every render so language switches are reflected.
    sel.innerHTML = '';
    var none = document.createElement('option');
    none.value = 'none';
    none.textContent = t('pf_none');
    sel.appendChild(none);
    var all = document.createElement('option');
    all.value = 'all';
    all.textContent = t('pf_all');
    sel.appendChild(all);
    bandsFor(key).forEach(function (band) {
      var o = document.createElement('option');
      o.value = band;
      o.textContent = bandLabel(key, band);
      sel.appendChild(o);
    });
    var valid = chosen === 'none' || chosen === 'all' || bandsFor(key).indexOf(chosen) !== -1;
    sel.value = valid ? chosen : 'none';

    list.innerHTML = '';
    root.classList.toggle('pf-collapsed', sel.value === 'none');
    if (sel.value === 'none') return;

    var items = (PRODUCTS[key] || []).filter(function (p) {
      return sel.value === 'all' || p.band === sel.value;
    });
    if (!items.length) {
      var li = document.createElement('li');
      li.className = 'pf-empty';
      li.textContent = t('pf_empty');
      list.appendChild(li);
      return;
    }
    items.forEach(function (p) {
      var li = document.createElement('li');
      li.innerHTML = '<span class="pf-dot" aria-hidden="true"></span><span>' + (p[curLang] || p.en) + '</span>';
      list.appendChild(li);
    });
    if (curLang !== 'en' && curLang !== 'zh' && t('pf_en_note') !== 'pf_en_note') {
      var noteLi = document.createElement('li');
      noteLi.className = 'pf-en-note';
      noteLi.textContent = t('pf_en_note');
      list.appendChild(noteLi);
    }
  }

  function initProductFilters() {
    var roots = document.querySelectorAll('.product-filter');
    Array.prototype.forEach.call(roots, function (root) {
      var sel = root.querySelector('[data-pf-select]');
      if (sel) sel.addEventListener('change', function () { renderProductFilter(root); });
      renderProductFilter(root);
    });
  }

  // Exposed so applyLang can refresh option/list text after a language switch.
  window.TYCHRON_PF_REFRESH = function () {
    var roots = document.querySelectorAll('.product-filter');
    Array.prototype.forEach.call(roots, renderProductFilter);
  };

  /* ---- Selected references: render from published-document data ---- */
  function loc(v) {
    if (!v) return '';
    return (typeof v === 'string') ? v : (v[curLang] || v.en || '');
  }

  function renderCases() {
    var scGrid = document.getElementById('csScGrid');
    if (scGrid) {
      scGrid.innerHTML = CASES.sc.map(function (c) {
        var stats = c.stats.map(function (s) {
          return '<div class="cs-stat"><b>' + s.v + '</b><span>' + loc(s.l) + '</span></div>';
        }).join('');
        // zh: show the Chinese text once as the main paragraph.
        // other languages: English main + Chinese reference line beneath.
        var mainP = (curLang === 'zh')
          ? '<p>' + (c.body.zh || '') + '</p>'
          : '<p>' + (c.body.en || '') + '</p><p class="cs-zh cs-small">' + (c.body.zh || '') + '</p>';
        // Note: rendered after the scroll-reveal observer has run, so no
        // .reveal class here — cards must be visible immediately.
        return '<article class="cs-card">' +
          '<div class="cs-card-img"><img src="assets/cases/' + c.img + '.jpeg" alt="" loading="lazy" /></div>' +
          '<div class="cs-card-body">' +
            '<span class="cs-tag">' + loc(c.tag) + '</span>' +
            '<h4>' + loc(c.title) + '</h4>' +
            mainP +
            '<div class="cs-stats">' + stats + '</div>' +
            '<div class="cs-src">Source: ' + c.src + '</div>' +
          '</div></article>';
      }).join('');
    }

    var gList = document.getElementById('csGlobalList');
    if (gList) {
      gList.innerHTML = CASES.global.map(function (g) {
        return '<li><b>' + loc(g.place) + '</b><span>' + loc(g.desc) + '</span></li>';
      }).join('');
    }

    var resList = document.getElementById('csXesRes');
    if (resList) {
      resList.innerHTML = CASES.xesRes.map(function (r) {
        return '<li><b>' + loc(r.place) + '</b><span>' + r.spec + '</span></li>';
      }).join('');
    }

    var cifList = document.getElementById('csXesCif');
    if (cifList) {
      cifList.innerHTML = CASES.xesCif.map(function (c, i) {
        return '<li><span class="cs-n">' + (i + 1) + '</span><b>' + loc(c) + '</b></li>';
      }).join('');
    }
  }

  window.TYCHRON_CASES_REFRESH = renderCases;

  // Wrap every visible brand word (Tychronic / TYCHRONIC) in .brand-word
  // so it always renders in Montserrat Semibold, in any language.
  function wrapBrandWord(el) {
    if (!el) return;
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    var targets = [];
    while (walker.nextNode()) {
      if (/(?:TYCHRONIC|Tychronic)/.test(walker.currentNode.nodeValue)) targets.push(walker.currentNode);
    }
    targets.forEach(function (node) {
      var text = node.nodeValue;
      var frag = document.createDocumentFragment();
      var re = /(TYCHRONIC|Tychronic)/g;
      var last = 0, m;
      while ((m = re.exec(text)) !== null) {
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var span = document.createElement('span');
        span.className = 'brand-word';
        span.textContent = m[0];
        frag.appendChild(span);
        last = m.index + m[0].length;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  function applyLang(lang) {
    curLang = LANGS.indexOf(lang) !== -1 ? lang : 'en';
    var dict = I18N[curLang] || I18N.en;
    var meta = META[curLang] || META.en;

    document.documentElement.lang = curLang;
    // Arabic reads right-to-left: flip the whole interface for local习惯.
    // All other languages stay LTR. Numbers/model codes are protected in CSS.
    document.documentElement.dir = curLang === 'ar' ? 'rtl' : 'ltr';
    document.title = meta.title;

    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', meta.desc);
    var og = document.querySelector('meta[property="og:title"]');
    if (og) og.setAttribute('content', meta.title);
    var ogd = document.querySelector('meta[property="og:description"]');
    if (ogd) ogd.setAttribute('content', meta.ogDesc);

    var picker = document.getElementById('langSel');
    if (picker && picker.value !== curLang) picker.value = curLang;

    var nodes = document.querySelectorAll('[data-i18n]');
    Array.prototype.forEach.call(nodes, function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v === undefined) v = I18N.en[el.getAttribute('data-i18n')];
      if (v !== undefined) { el.innerHTML = v; wrapBrandWord(el); }
    });
    var phs = document.querySelectorAll('[data-i18n-ph]');
    Array.prototype.forEach.call(phs, function (el) {
      var v = dict[el.getAttribute('data-i18n-ph')];
      if (v !== undefined) el.setAttribute('placeholder', v);
    });
    var arias = document.querySelectorAll('[data-i18n-aria]');
    Array.prototype.forEach.call(arias, function (el) {
      var v = dict[el.getAttribute('data-i18n-aria')];
      if (v !== undefined) el.setAttribute('aria-label', v.replace(/<[^>]+>/g, ''));
    });

    var btns = document.querySelectorAll('[data-lang-set]');
    Array.prototype.forEach.call(btns, function (b) {
      var on = b.getAttribute('data-lang-set') === curLang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    if (typeof window.TYCHRON_PF_REFRESH === 'function') window.TYCHRON_PF_REFRESH();
    if (typeof window.TYCHRON_CASES_REFRESH === 'function') window.TYCHRON_CASES_REFRESH();

    try { localStorage.setItem(STORAGE_KEY, curLang); } catch (e) {}
  }

  // Public i18n API
  window.TYCHRON_I18N = { t: t, getLang: function () { return curLang; }, setLang: applyLang };

  // ---- Year in footer ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ---- Language dropdown ----
  var langSel = document.getElementById('langSel');
  if (langSel) {
    // 'change' covers desktop/mobile browsers; 'input' covers in-app webviews
    // that only fire input. Guard against double-apply (harmless but cheap).
    var lastPicked = langSel.value;
    function onLangPicked() {
      if (langSel.value && langSel.value !== lastPicked) {
        lastPicked = langSel.value;
        applyLang(langSel.value);
      } else if (langSel.value) {
        applyLang(langSel.value);
      }
    }
    langSel.addEventListener('change', onLangPicked);
    langSel.addEventListener('input', onLangPicked);
    // Back/forward cache restore: re-apply the saved choice so the page
    // never comes back in a stale language.
    window.addEventListener('pageshow', function () {
      applyLang(detectLang());
    });
  }

  // ---- Mobile nav ----
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Scroll reveal ----
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  } else {
    Array.prototype.forEach.call(items, function (el) { el.classList.add('in'); });
  }

  // ---- Contact form: validate then POST to FormSubmit.co (AJAX, no page reload) ----
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  var INBOX = 'sam.mao@tychronic.com';
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var phone = form.elements.phone ? form.elements.phone.value.trim() : '';
      var interest = form.elements.interest.value;
      var message = form.elements.message.value.trim();
      var ok = true;

      function mark(id, valid) {
        var el = document.getElementById(id);
        if (el) el.classList.toggle('invalid', !valid);
        return valid;
      }
      ok = mark('name', name.length > 0) && ok;
      ok = mark('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) && ok;
      ok = mark('message', message.length > 0) && ok;

      if (!ok) {
        note.textContent = t('form_err');
        note.classList.remove('ok');
        return;
      }

      var subject = (curLang === 'zh' ? '网站询价 — ' : 'Website inquiry — ') + interest;
      var fd = new FormData(form);
      fd.append('_subject', subject);
      fd.append('_replyto', email);
      fd.append('_captcha', 'false');   // reCAPTCHA is not usable with AJAX; honeypot below guards spam
      fd.append('_honey', '');          // honeypot: leave empty

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      note.textContent = t('form_sending');
      note.classList.remove('ok');

      fetch('https://formsubmit.co/ajax/' + INBOX, {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        if (data && (data.success === 'true' || data.success === true)) {
          note.textContent = t('form_sent');
          note.classList.add('ok');
          form.reset();
        } else {
          throw new Error('submit rejected');
        }
      })
      .catch(function () {
        note.textContent = t('form_fail') + ' ' + INBOX;
        note.classList.remove('ok');
      })
      .then(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
    });
  }

  // ---- Copy email address button ----
  var copyBtn = document.getElementById('copyEmail');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      function done() {
        var old = copyBtn.textContent;
        copyBtn.textContent = t('copy_ok');
        copyBtn.classList.add('copied');
        window.setTimeout(function () {
          copyBtn.textContent = old;
          copyBtn.classList.remove('copied');
        }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(INBOX).then(done).catch(function () {});
      }
    });
  }

  // ---- Register service worker for offline support ----
  // Kept deliberately minimal: the install card/sheet were removed by request,
  // only the SW registration is restored so "offline-ready" is truthful.
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js').catch(function () {});
    });
  }

  // ---- Apply detected language on load ----
  function boot() {
    initProductFilters();
    applyLang(detectLang());
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
