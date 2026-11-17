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
      nav_solutions: 'Solutions', nav_why: 'Why Tychronic', nav_about: 'About', nav_contact: 'Contact',
      header_cta: 'Get in touch',

      hero_eyebrow: 'Global energy solutions partner',
      hero_h1: 'Charge Ahead<br /><span>Power Beyond</span>',
      hero_sub: "One partner for the full energy chain — EV charging, BESS, power distribution and photovoltaic — backed by three of China's most proven manufacturers.",
      hero_btn1: 'Explore solutions', hero_btn2: 'Talk to us <span aria-hidden="true">→</span>',
      stat1: 'Partner brands', stat2: 'Countries served', stat3: 'Global PV glass share',
      tag1: 'EV Charging', tag2: 'BESS', tag3: 'Power Grid', tag4: 'Photovoltaic',

      partners_label: 'Working with proven manufacturers',
      partner_sc: 'EV Charging &amp; BESS',
      partner_by_name: 'Baiyun Electric', partner_by: 'Power Distribution Equipment',
      partner_xy_name: 'XES', partner_xy: 'Photovoltaic &amp; New Energy',

      sol_eyebrow: 'Our solutions',
      sol_h2: 'Three brands. One complete energy chain.',
      sol_p: 'From generation to charge point, we bring together the equipment your project needs — sourced, checked and delivered by one dedicated team.',

      sc_index: '01 / EV CHARGING', sc_h3: 'EV Charging &amp; BESS',
      sc_desc: 'A global tier-one provider of EV charging and microgrids, with 700,000+ public charge points across 70+ countries. From ultra-fast DC dispensers and power cabinets to liquid-cooled C&amp;I BESS, we supply hardware built for demanding sites.',
      sc_s1: 'eBox261 nominal energy', sc_s2: 'Rated AC output power', sc_s3: 'Charging power range', sc_s4: 'IP rating',
      sc_f1: 'eBox261: 314 Ah semi-solid-state LFP cells, 248 kWh usable energy, intelligent liquid cooling',
      sc_f2: 'AI-driven EMS with fast global OTA; system round-trip efficiency ≥91.5%',
      sc_f3: 'Grid-connected, island mode and black-start microgrid operation',
      sc_f4: 'AC 7 kW to DC 720 kW charging portfolio for global markets, up to 2.56 MW',
      quote: 'Request a quote <span aria-hidden="true">→</span>',

      by_index: '02 / POWER DISTRIBUTION', by_h3: 'Power Distribution Equipment',
      by_desc: 'A listed power-equipment group (SSE: 603861) with a complete product chain from 0.4 kV to 1100 kV. Trusted in smart grids, data centres, rail transit and new-energy projects, with equipment shipped to 54 countries.',
      by_s1: 'Full voltage range', by_s2: 'Gas-insulated switchgear', by_s3: 'Countries with deliveries', by_s4: 'Group founded',
      by_f1: 'Medium &amp; low voltage switchgear, ring main units, LV switches',
      by_f2: 'Oil-immersed, dry-type and special transformers',
      by_f3: 'Power capacitors, busway, intelligent components',
      by_f4: 'Data-centre and microgrid power distribution solutions',

      xy_index: '03 / PHOTOVOLTAIC', xy_h3: 'Photovoltaic &amp; New Energy',
      xy_desc: "The world's leading photovoltaic glass manufacturer (HKEX: 00968), supplying major module makers worldwide with roughly 30% of global market share. Also active in EVA/POE film, cells and BESS.",
      xy_s1: 'Global PV glass share', xy_s2: 'Melting capacity (2025)', xy_s3: 'Production bases', xy_s4: 'HKEX listed',
      xy_f1: 'Ultra-clear patterned photovoltaic glass, raw &amp; tempered',
      xy_f2: 'Anti-reflective (AR) coated glass and back glass',
      xy_f3: 'EVA / POE photovoltaic encapsulant film',
      xy_f4: 'Residential &amp; C&amp;I BESS, inverters, EV chargers',

      why_eyebrow: 'Why Tychronic', why_h2: 'A single partner for a complex supply chain',
      why_p: 'We make global sourcing of energy equipment straightforward — with technical depth, honest communication and room to grow together.',
      why1_h: 'One-stop sourcing', why1_p: 'Charging, BESS, switchgear and photovoltaic from three established manufacturers — coordinated through one account team.',
      why2_h: 'Global project experience', why2_p: 'Our partner brands deliver into 70+ countries and 54 markets respectively, with certifications and references to match.',
      why3_h: 'Technical, not just trading', why3_p: 'We read the datasheets for you — matching voltage, power, protection and site conditions before a quote ever reaches you.',
      why4_h: 'Built for long-term deals', why4_p: 'Direct, transparent communication and after-sales support — the kind of partner you want when a project runs for years.',

      about_eyebrow: 'About Tychronic', about_h2: 'Energy is changing.<br />We move with it.',
      about_p1: 'Tychronic is an independent sourcing and supply partner for the global new-energy market. We connect developers, EPCs, distributors and operators with equipment from established Chinese manufacturers — covering the chain from solar generation and grid distribution to BESS and charging.',
      about_p2: 'Our role is practical: understand the site, shortlist the right products, verify the specifications and keep the conversation honest from inquiry to delivery. Formal distribution agreements with our partner brands are being finalised; until then we operate as an independent representative and sourcing partner.',
      about_btn: 'Start a conversation',

      contact_eyebrow: 'Contact', contact_h2: "Let's build something that lasts.",
      contact_p: "Tell us about your project — site, power requirements, volume and timeline. We'll come back with a shortlist and an honest quote.",
      contact_email: 'Email', contact_web: 'Website', contact_whatsapp: 'WhatsApp',
      f_name: 'Your name', f_name_ph: 'Full name', f_email: 'Email address',
      f_interest: "I'm interested in", opt1: 'EV Charging', opt2: 'BESS', opt3: 'Power Distribution', opt4: 'Photovoltaic', opt5: 'Multiple / not sure yet',
      f_message: 'Tell us about your project', f_msg_ph: 'Location, power needs, volume, timeline…',
      f_send: 'Send inquiry', form_note_default: "We'll reply to your email shortly.",
      form_err: 'Please fill in your name, a valid email and a short message.',
      form_mail_open: 'Your email app is opening with the message ready to send.',
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
      brand_aria: '泰储云首页', nav_aria: '主导航',
      toggle_aria: '展开或收起导航', lang_aria: '选择语言',
      nav_solutions: '解决方案', nav_why: '为什么选我们', nav_about: '关于我们', nav_contact: '联系我们',
      header_cta: '联系我们',

      hero_eyebrow: '全球新能源解决方案合作伙伴',
      hero_h1: '全力向前<br /><span>动力无界</span>',
      hero_sub: '一个合作窗口，覆盖完整能源链——充电桩、BESS、输配电与光伏，由三家中国成熟制造商提供支撑。',
      hero_btn1: '了解方案', hero_btn2: '聊聊你的项目 <span aria-hidden="true">→</span>',
      stat1: '合作品牌', stat2: '服务国家和地区', stat3: '全球光伏玻璃份额',
      tag1: '充电桩', tag2: 'BESS', tag3: '电网配电', tag4: '光伏',

      partners_label: '与成熟制造商携手',
      partner_sc: '充电桩与 BESS',
      partner_by_name: '白云电气', partner_by: '输配电设备',
      partner_xy_name: 'XES', partner_xy: '光伏与新能源',

      sol_eyebrow: '解决方案',
      sol_h2: '三大品牌，覆盖完整能源链',
      sol_p: '从发电端到充电终端，我们把项目需要的设备整合在一起——统一询价、核验与交付。',

      sc_index: '01 / 充电桩', sc_h3: '充电桩与 BESS',
      sc_desc: '全球头部充电与微电网方案商，公共充电点超过 70 万个，覆盖 70 多个国家。产品线从超快直流分体桩与功率柜，到液冷工商业 BESS，为严苛场景提供专业设备。',
      sc_s1: 'eBox261 标称电量', sc_s2: '额定交流输出功率', sc_s3: '充电功率范围', sc_s4: 'IP 防护等级',
      sc_f1: 'eBox261：314Ah 半固态磷酸铁锂电芯，可用电量 248kWh，智能液冷温控',
      sc_f2: 'AI 驱动 EMS，支持全球快速 OTA；系统往返效率 ≥91.5%',
      sc_f3: '支持并网、孤岛模式与黑启动微电网运行',
      sc_f4: '面向国际市场的交流 7kW 至直流 720kW 全功率充电产品线，最高可达 2.56MW',
      quote: '获取报价 <span aria-hidden="true">→</span>',

      by_index: '02 / 输配电', by_h3: '输配电设备',
      by_desc: '上市电力设备集团（上交所 603861），产品链覆盖 0.4kV 至 1100kV 全电压等级。深耕智能电网、数据中心、轨道交通与新能源项目，设备已发往 54 个国家。',
      by_s1: '全电压等级覆盖', by_s2: '气体绝缘开关设备', by_s3: '已交付国家', by_s4: '集团成立年份',
      by_f1: '中低压开关柜、环网柜、低压开关',
      by_f2: '油浸式、干式及特种变压器',
      by_f3: '电力电容器、母线槽、智能元件',
      by_f4: '数据中心与微电网配电解决方案',

      xy_index: '03 / 光伏', xy_h3: '光伏与新能源',
      xy_desc: '全球领先的光伏玻璃制造商（港交所 00968），为全球主要组件厂商供货，全球市场份额约 30%，同时布局 EVA/POE 胶膜、电池与 BESS。',
      xy_s1: '全球光伏玻璃份额', xy_s2: '日熔化量（2025）', xy_s3: '生产基地', xy_s4: '香港上市',
      xy_f1: '超白压花光伏玻璃，原片与钢化',
      xy_f2: '减反射（AR）镀膜玻璃及背板玻璃',
      xy_f3: 'EVA / POE 光伏封装胶膜',
      xy_f4: '户用与工商业 BESS、逆变器、充电桩',

      why_eyebrow: '为什么选我们', why_h2: '复杂供应链，一个合作窗口',
      why_p: '让新能源设备的全球采购变得简单——懂技术、说话实在，也愿意陪你长期做。',
      why1_h: '一站式采购', why1_p: '充电、BESS、开关柜与光伏来自三家成熟制造商，由一个客户经理统一对接。',
      why2_h: '全球项目经验', why2_p: '合作品牌分别覆盖 70+ 国家和 54 个市场，认证与项目案例齐备。',
      why3_h: '懂技术，不只是贸易', why3_p: '我们替你看规格书——报价前先核对电压、功率、防护等级和现场条件。',
      why4_h: '为长期合作而设', why4_p: '直接透明的沟通与售后支持，项目做几年也放心。',

      about_eyebrow: '关于泰储云', about_h2: '能源在变。<br />我们跟着变。',
      about_p1: '泰储云是面向全球新能源市场的独立采购与供应合作伙伴。我们为开发商、EPC、经销商和运营商对接中国成熟制造企业的设备——覆盖从光伏发电、电网配电到 BESS 与充电的完整链条。',
      about_p2: '我们的工作很具体：看懂现场，筛对产品，核对参数，从询价到交付都保持坦诚沟通。我们与合作品牌的正式代理协议正在办理中；在此之前，我们以独立代表与采购合作伙伴的身份开展业务。',
      about_btn: '聊聊你的项目',

      contact_eyebrow: '联系我们', contact_h2: '一起做点长久的事',
      contact_p: '把项目情况告诉我们——现场、功率需求、数量和周期。我们会给出选型建议和实在报价。',
      contact_email: '邮箱', contact_web: '网址', contact_whatsapp: 'WhatsApp',
      f_name: '您的姓名', f_name_ph: '姓名', f_email: '邮箱地址',
      f_interest: '感兴趣的产品', opt1: '充电桩', opt2: 'BESS', opt3: '输配电', opt4: '光伏', opt5: '多项 / 暂不确定',
      f_message: '请介绍您的项目', f_msg_ph: '地点、功率需求、数量、周期…',
      f_send: '发送询价', form_note_default: '我们会尽快回复你的邮箱。',
      form_err: '请填写姓名、有效邮箱和简短留言。',
      form_mail_open: '邮件客户端已打开，请发送预填好的邮件。',
      foot_slogan: '全力向前 · 动力无界',
      foot_legal: ' 泰储云。独立采购与供应合作伙伴。合作品牌名称仅供参考。',

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
  var LANGS = ['en', 'zh', 'ar', 'ru', 'es', 'pt', 'fr', 'de'];
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
      desc: 'Tychronic is your sourcing and supply partner for EV charging, BESS, power distribution and photovoltaic — representing StarCharge, Baiyun Electric and XES for global markets.',
      ogDesc: 'EV charging · BESS · Power distribution · Photovoltaic. Three proven manufacturers, one partner.'
    },
    zh: {
      title: '泰储云 TYCHRONIC — 全力向前 动力无界',
      desc: '泰储云是充电桩、BESS、输配电与光伏的采购与供应合作伙伴，为全球市场对接星星充电、白云电气与 XES 三家成熟制造商。',
      ogDesc: '充电桩 · BESS · 输配电 · 光伏。三家成熟制造商，一个合作窗口。'
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
      /* BESS */
      { kw: 0,    band: 'bess',     en: 'vBox residential BESS',                              zh: 'vBox 户用储能系统' },
      { kw: 0,    band: 'bess',     en: 'eBox-AL261 C&amp;I BESS, 261 kWh',                    zh: 'eBox-AL261 工商业储能，261kWh' },
      { kw: 0,    band: 'bess',     en: '3.44 MWh containerised grid-scale BESS',             zh: '3.44MWh 集装箱式大型储能系统' },
      { kw: 0,    band: 'bess',     en: '20 ft liquid-cooled BESS (UL 9540A certified)',      zh: '20 尺液冷储能系统（UL 9540A 认证）' },
      { kw: 0,    band: 'bess',     en: 'Metis60 C&amp;I PV inverter',                        zh: 'Metis60 工商业光伏逆变器' },
      { kw: 0,    band: 'bess',     en: 'Metis 215-L liquid-cooled PCS',                      zh: 'Metis 215-L 液冷储能变流器' }
    ],
    by: [
      { kw: 0.4,   band: '0.4kV',   en: 'Low-voltage switchgear &amp; LV switches, 0.4 kV class', zh: '低压开关柜与低压开关，0.4kV 级' },
      { kw: 10,    band: '10kV',    en: 'Medium-voltage switchgear &amp; ring main units, 10 kV class', zh: '中压开关柜与环网柜，10kV 级' },
      { kw: 35,    band: '35kV',    en: 'Medium-voltage switchgear &amp; transformers, 35 kV class', zh: '中压开关柜与变压器，35kV 级' },
      { kw: 110,   band: '110kV',   en: 'Power transformers &amp; GIS, 110 kV class', zh: '电力变压器与 GIS，110kV 级' },
      { kw: 1100,  band: '1100kV',  en: 'Gas-insulated switchgear (GIS / C-GIS), up to 1100 kV', zh: '气体绝缘开关设备（GIS / C-GIS），最高 1100kV' }
    ],
    xy: [
      { kw: 0,   band: 'glass',  en: 'Ultra-clear patterned photovoltaic glass — raw &amp; tempered', zh: '超白压花光伏玻璃 — 原片与钢化' },
      { kw: 0,   band: 'glass',  en: 'Anti-reflective (AR) coated glass &amp; back glass', zh: '减反射（AR）镀膜玻璃与背板玻璃' },
      { kw: 0,   band: 'film',   en: 'EVA / POE photovoltaic encapsulant film', zh: 'EVA / POE 光伏封装胶膜' },
      { kw: 0,   band: 'bess',   en: 'Residential &amp; C&amp;I BESS, inverters and EV chargers', zh: '户用与工商业 BESS、逆变器与充电桩' }
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
      'bess':     { en: 'BESS', zh: 'BESS' }
    },
    by: {
      '0.4kV': { en: '0.4 kV', zh: '0.4kV' },
      '10kV': { en: '10 kV', zh: '10kV' },
      '35kV': { en: '35 kV', zh: '35kV' },
      '110kV': { en: '110 kV', zh: '110kV' },
      '1100kV': { en: '1100 kV', zh: '1100kV' }
    },
    xy: {
      'glass': { en: 'Photovoltaic glass', zh: '光伏玻璃' },
      'film': { en: 'Encapsulant film', zh: '封装胶膜' },
      'bess': { en: 'BESS', zh: 'BESS' }
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
    // Keep the same LTR layout for every language (user request: switching to
    // Arabic must not mirror/flip the whole interface). Text itself is RTL-safe.
    document.documentElement.dir = 'ltr';
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
    if (typeof window.TYCHRON_PWA_REFRESH === 'function') window.TYCHRON_PWA_REFRESH();

    try { localStorage.setItem(STORAGE_KEY, curLang); } catch (e) {}
  }

  // Public API used by the PWA install block
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

  // ---- Contact form: validate then open mail client with prefilled body ----
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
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
      var labelName = curLang === 'zh' ? '姓名' : 'Name';
      var labelEmail = curLang === 'zh' ? '邮箱' : 'Email';
      var labelInterest = curLang === 'zh' ? '感兴趣的产品' : 'Interested in';
      var labelMsg = curLang === 'zh' ? '项目详情' : 'Project details';
      var body = labelName + ': ' + name + '\n' + labelEmail + ': ' + email + '\n' + labelInterest + ': ' + interest + '\n\n' + labelMsg + ':\n' + message;
      window.location.href = 'mailto:sam.mao@tychronic.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      note.textContent = t('form_mail_open');
      note.classList.add('ok');
    });
  }

  // ---- Apply detected language on load ----
  // Wait until the full DOM (including the injected PWA block) is parsed,
  // so data-i18n nodes inside it are present when we translate.
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
