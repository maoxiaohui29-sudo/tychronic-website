// Global middleware:
// 1) Protect /admin and /admin.html with HTTP Basic Auth.
// 2) Server-side localize <head> for /?lang=xx so crawlers that do not run JS
//    see a self-referencing canonical, localized title/description and lang.
const SITE = 'https://www.tychronic.com/';

const META = {
  en: {
    title: 'TYCHRONIC — Charge Ahead. Power Beyond',
    desc: 'Tychronic is your sourcing and supply partner for EV charging, energy storage and power distribution — representing StarCharge, Baiyun Electric and XES for global markets.',
    ogDesc: 'EV charging · Energy storage · Power distribution. Three proven manufacturers, one partner.'
  },
  zh: {
    title: '泰储云能 TYCHRONIC — 全力向前 动力无界',
    desc: '泰储云能是充电桩、储能与输配电的采购与供应合作伙伴，为全球市场对接星星充电、白云电气与信义储电三家成熟制造商。',
    ogDesc: '充电桩 · 储能系统 · 输配电。三家成熟制造商，一个合作窗口。'
  },
  de: {
    title: 'TYCHRONIC — Voran laden. Energie ohne Grenzen.',
    desc: 'Tychronic ist Ihr Beschaffungs- und Lieferpartner für Ladeinfrastruktur, Energiespeicherung und Stromverteilung — für StarCharge, Baiyun Electric und XES auf den globalen Märkten.',
    ogDesc: 'E-Laden · Energiespeicherung · Stromverteilung. Drei etablierte Hersteller, ein Partner.'
  },
  es: {
    title: 'TYCHRONIC — Carga hacia adelante. Energía sin límites.',
    desc: 'Tychronic es su socio de abastecimiento y suministro de carga de vehículos eléctricos, almacenamiento de energía y distribución eléctrica, en representación de StarCharge, Baiyun Electric y XES para los mercados globales.',
    ogDesc: 'Carga VE · Almacenamiento de energía · Distribución eléctrica. Tres fabricantes consolidados, un solo socio.'
  },
  pt: {
    title: 'TYCHRONIC — Carregue à frente. Energia além.',
    desc: 'A Tychronic é sua parceira de sourcing e fornecimento de carregamento de veículos elétricos, armazenamento de energia e distribuição elétrica — representando StarCharge, Baiyun Electric e XES para os mercados globais.',
    ogDesc: 'Carregamento VE · Armazenamento de energia · Distribuição elétrica. Três fabricantes consolidados, um único parceiro.'
  },
  fr: {
    title: "TYCHRONIC — Chargez de l'avant. Énergie sans limites.",
    desc: "Tychronic est votre partenaire de sourcing et d'approvisionnement pour la recharge de véhicules électriques, le stockage d'énergie et la distribution électrique — représentant StarCharge, Baiyun Electric et XES sur les marchés mondiaux.",
    ogDesc: 'Recharge VE · Stockage d’énergie · Distribution électrique. Trois fabricants éprouvés, un seul partenaire.'
  },
  ru: {
    title: 'TYCHRONIC — Вперёд к зарядке. Энергия без границ.',
    desc: 'Tychronic — ваш партнёр по закупкам и поставкам зарядной инфраструктуры, накопителей энергии и распределения электроэнергии, представляющий StarCharge, Baiyun Electric и XES на мировых рынках.',
    ogDesc: 'Зарядка ЭМ · Накопители энергии · Распределение энергии. Три проверенных производителя, один партнёр.'
  },
  ar: {
    title: 'TYCHRONIC — اشحن للأمام. طاقة بلا حدود.',
    desc: 'Tychronic شريكك في التوريد والإمداد لشحن المركبات الكهربائية وتخزين الطاقة وتوزيع الطاقة، وتمثّل StarCharge وBaiyun Electric وXES في الأسواق العالمية.',
    ogDesc: 'شحن المركبات · تخزين الطاقة · توزيع الطاقة. ثلاثة مصنّعين موثوقين، شريك واحد.'
  },
  vi: {
    title: 'TYCHRONIC — Sạc tiến phía trước. Năng lượng vượt trội.',
    desc: 'Tychronic là đối tác mua sắm và cung ứng sạc xe điện, lưu trữ năng lượng và phân phối điện — đại diện cho StarCharge, Baiyun Electric và XES tại các thị trường toàn cầu.',
    ogDesc: 'Sạc xe điện · Lưu trữ năng lượng · Phân phối điện. Ba nhà sản xuất uy tín, một đối tác duy nhất.'
  }
};

// Procurement landing pages: localized head for /storage-261kwh,
// /storage-5mwh and /charging-dc. Body stays in English (technical
// datasheet language); crawlers still get a localized
// title/description/canonical per language.
const PAGES = {
  '/storage-261kwh': {
    en: {
      title: '261 kWh Commercial Storage Cabinet — Specs, Models & Sourcing | Tychronic',
      desc: '261 kWh commercial and C&I storage cabinets: verified specifications for XES-M125/261-YB and ETANK-5S — 314 Ah LFP, 125 kW AC output, 832 V, 8000 cycles, IP54. Sourced by Tychronic.',
      ogDesc: 'Verified 261 kWh LFP storage specifications and project references, sourced through Tychronic.'
    },
    zh: {
      title: '261kWh 商用储能柜 — 规格、型号与采购 | 泰储云能',
      desc: '261kWh 工商业储能柜：XES-M125/261-YB 与 ETANK-5S 已核实参数——314Ah 磷酸铁锂、125kW 交流输出、832V、8000 次循环、IP54。泰储云能供应。',
      ogDesc: '已核实的 261kWh 磷酸铁锂储能规格与项目案例，由泰储云能对接供应。'
    },
    de: {
      title: '261 kWh Gewerbespeicher — Spezifikationen & Beschaffung | Tychronic',
      desc: '261 kWh Gewerbe- und Industriespeicher: geprüfte Daten für XES-M125/261-YB und ETANK-5S — 314-Ah-LFP, 125 kW AC, 832 V, 8000 Zyklen, IP54.',
      ogDesc: 'Geprüfte 261-kWh-LFP-Spezifikationen und Referenzen, beschafft über Tychronic.'
    },
    es: {
      title: 'Armario de almacenamiento comercial de 261 kWh — Especificaciones | Tychronic',
      desc: 'Armarios de almacenamiento comercial e industrial de 261 kWh: especificaciones verificadas de XES-M125/261-YB y ETANK-5S — LFP de 314 Ah, 125 kW CA, 832 V, 8000 ciclos, IP54.',
      ogDesc: 'Especificaciones LFP de 261 kWh verificadas y referencias de proyectos, suministradas por Tychronic.'
    },
    pt: {
      title: 'Armário de armazenamento comercial de 261 kWh — Especificações | Tychronic',
      desc: 'Armários de armazenamento comercial e industrial de 261 kWh: especificações verificadas de XES-M125/261-YB e ETANK-5S — LFP de 314 Ah, 125 kW CA, 832 V, 8000 ciclos, IP54.',
      ogDesc: 'Especificações LFP de 261 kWh verificadas e referências de projetos, fornecidas pela Tychronic.'
    },
    fr: {
      title: 'Armoire de stockage commercial 261 kWh — Caractéristiques | Tychronic',
      desc: 'Armoires de stockage commercial et industriel 261 kWh : caractéristiques vérifiées XES-M125/261-YB et ETANK-5S — LFP 314 Ah, 125 kW CA, 832 V, 8000 cycles, IP54.',
      ogDesc: 'Caractéristiques LFP 261 kWh vérifiées et références projets, via Tychronic.'
    },
    ru: {
      title: 'Коммерческая накопительная система 261 кВт·ч — характеристики | Tychronic',
      desc: 'Промышленные накопители 261 кВт·ч: проверенные характеристики XES-M125/261-YB и ETANK-5S — LFP 314 А·ч, 125 кВт AC, 832 В, 8000 циклов, IP54.',
      ogDesc: 'Проверенные характеристики LFP 261 кВт·ч и проектные ссылки через Tychronic.'
    },
    ar: {
      title: 'خزان تخزين تجاري 261 كيلوواط ساعة — المواصفات | تايكرونيك',
      desc: 'خزائن تخزين تجارية وصناعية بسعة 261 كيلوواط ساعة: مواصفات مؤكدة لـ XES-M125/261-YB و ETANK-5S — خلايا LFP 314 أمبير ساعة، 125 كيلوواط تيار متردد، 832 فولت، 8000 دورة، IP54.',
      ogDesc: 'مواصفات LFP مؤكدة بسعة 261 كيلوواط ساعة ومراجع مشاريع عبر تايكرونيك.'
    },
    vi: {
      title: 'Tủ lưu trữ thương mại 261 kWh — Thông số & Cung ứng | Tychronic',
      desc: 'Tủ lưu trữ thương mại và công nghiệp 261 kWh: thông số đã xác minh của XES-M125/261-YB và ETANK-5S — LFP 314 Ah, 125 kW AC, 832 V, 8000 chu kỳ, IP54.',
      ogDesc: 'Thông số LFP 261 kWh đã xác minh và tham chiếu dự án, cung ứng qua Tychronic.'
    }
  },
  '/storage-5mwh': {
    en: {
      title: '5 MWh Utility BESS Container — 20 ft, 5015.96 kWh, Specs | Tychronic',
      desc: '5 MWh utility-scale BESS in a 20 ft container: 5,015.96 kWh LFP, 1331.2 V nominal, 0.5P, 94% RTE, IP55, IEC 62619 / UL 9540 / NFPA 855. Projects and sourcing by Tychronic.',
      ogDesc: 'Verified 5 MWh centralized ESS figures and European utility-scale project references, sourced through Tychronic.'
    },
    zh: {
      title: '5MWh 大储集装箱 — 20 尺、5015.96kWh、规格与案例 | 泰储云能',
      desc: '5MWh 大型储能系统，20 尺集装箱：5015.96kWh 磷酸铁锂、标称 1331.2V、0.5P、往返效率 94%、IP55、IEC 62619 / UL 9540 / NFPA 855。项目案例与供应由泰储云能对接。',
      ogDesc: '已核实的 5MWh 集中式储能参数与欧洲大型储能项目案例，由泰储云能供应。'
    },
    de: {
      title: '5-MWh-Utility-BESS-Container — 20 ft, 5015,96 kWh | Tychronic',
      desc: '5-MWh-BESS im 20-Fuß-Container: 5.015,96 kWh LFP, 1331,2 V Nennspannung, 0,5P, 94 % RTE, IP55, IEC 62619 / UL 9540 / NFPA 855.',
      ogDesc: 'Geprüfte 5-MWh-Daten und Referenzen zu europäischen Großprojekten über Tychronic.'
    },
    es: {
      title: 'Contenedor BESS de utilidad de 5 MWh — 20 pies, 5015,96 kWh | Tychronic',
      desc: 'BESS de 5 MWh a escala de servicio en contenedor de 20 pies: 5.015,96 kWh LFP, 1331,2 V nominales, 0,5P, 94 % RTE, IP55, IEC 62619 / UL 9540 / NFPA 855.',
      ogDesc: 'Datos verificados de ESS centralizado de 5 MWh y proyectos europeos, vía Tychronic.'
    },
    pt: {
      title: 'Contentor BESS de serviço de 5 MWh — 20 pés, 5015,96 kWh | Tychronic',
      desc: 'BESS de 5 MWh em contentor de 20 pés: 5.015,96 kWh LFP, 1331,2 V nominais, 0,5P, 94 % RTE, IP55, IEC 62619 / UL 9540 / NFPA 855.',
      ogDesc: 'Dados verificados de ESS centralizado de 5 MWh e projetos europeus, via Tychronic.'
    },
    fr: {
      title: 'Conteneur BESS utility 5 MWh — 20 pieds, 5015,96 kWh | Tychronic',
      desc: 'BESS 5 MWh en conteneur 20 pieds : 5 015,96 kWh LFP, 1331,2 V nominal, 0,5P, 94 % RTE, IP55, IEC 62619 / UL 9540 / NFPA 855.',
      ogDesc: 'Données vérifiées ESS centralisé 5 MWh et références de projets européens, via Tychronic.'
    },
    ru: {
      title: 'Контейнер BESS 5 МВт·ч — 20 футов, 5015,96 кВт·ч | Tychronic',
      desc: ' BESS 5 МВт·ч в 20-футовом контейнере: 5015,96 кВт·ч LFP, 1331,2 В, 0,5P, КПД 94 %, IP55, IEC 62619 / UL 9540 / NFPA 855.',
      ogDesc: 'Проверенные данные ESS 5 МВт·ч и европейские проекты через Tychronic.'
    },
    ar: {
      title: 'حاوية تخزين BESS بقدرة 5 ميجاوات ساعة — 20 قدم | تايكرونيك',
      desc: 'نظام تخزين 5 ميجاوات ساعة في حاوية 20 قدمًا: 5015.96 كيلوواط ساعة LFP، 1331.2 فولت، 0.5P، كفاءة 94٪، IP55، IEC 62619 / UL 9540 / NFPA 855.',
      ogDesc: 'بيانات مؤكدة لنظام تخزين مركزي 5 ميجاوات ساعة ومشاريع أوروبية عبر تايكرونيك.'
    },
    vi: {
      title: 'Container BESS điện lực 5 MWh — 20 ft, 5015,96 kWh | Tychronic',
      desc: 'BESS 5 MWh quy mô tiện ích trong container 20 ft: 5015,96 kWh LFP, 1331,2 V danh định, 0,5P, RTE 94%, IP55, IEC 62619 / UL 9540 / NFPA 855.',
      ogDesc: 'Thông số ESS tập trung 5 MWh đã xác minh và dự án điện lực châu Âu qua Tychronic.'
    }
  },
  '/charging-dc': {
    en: {
      title: 'DC Fast Charging — 60 to 720 kW, All-in-One and Split | Tychronic',
      desc: 'StarCharge DC fast charging, verified: Jupiter V4 60 kW, Titan V4 320 kW and Titan V5 180 kW all-in-one units, Nova 360/480/720 kW power cabinets with Triton, Aries, Seraph, Hydrus and Neptune dispensers. 150-1000 Vdc, CCS2, OCPP 1.6J, CE.',
      ogDesc: 'Verified StarCharge DC fast charging specifications: all-in-one units 60-320 kW, power cabinets to 720 kW, dispensers to 500 A. Sourced through Tychronic.'
    },
    zh: {
      title: '直流快充 — 60 至 720kW，一体式与分体式 | 泰储云能',
      desc: '星星充电直流快充已核实参数：Jupiter V4 60kW、Titan V4 320kW、Titan V5 180kW 一体机，Nova 360/480/720kW 功率柜配 Triton、Aries、Seraph、Hydrus、Neptune 终端。150-1000Vdc、CCS2、OCPP 1.6J、CE。',
      ogDesc: '已核实的星星充电直流快充规格：一体机 60-320kW，功率柜至 720kW，终端至 500A，由泰储云能对接供应。'
    },
    de: {
      title: 'DC-Schnellladen — 60 bis 720 kW, Kompakt und Split | Tychronic',
      desc: 'StarCharge DC-Schnellladen, geprüft: Jupiter V4 60 kW, Titan V4 320 kW und Titan V5 180 kW als Kompaktgeräte, Nova-Leistungsschränke 360/480/720 kW mit Triton-, Aries-, Seraph-, Hydrus- und Neptune-Säulen. 150-1000 V DC, CCS2, OCPP 1.6J, CE.',
      ogDesc: 'Geprüfte StarCharge-DC-Daten: Kompaktgeräte 60-320 kW, Leistungsschränke bis 720 kW, Säulen bis 500 A, beschafft über Tychronic.'
    },
    es: {
      title: 'Carga rápida CC — de 60 a 720 kW, todo en uno y split | Tychronic',
      desc: 'Carga rápida CC StarCharge verificada: Jupiter V4 60 kW, Titan V4 320 kW y Titan V5 180 kW todo en uno, armarios de potencia Nova de 360/480/720 kW con surtidores Triton, Aries, Seraph, Hydrus y Neptune. 150-1000 Vdc, CCS2, OCPP 1.6J, CE.',
      ogDesc: 'Especificaciones CC StarCharge verificadas: equipos todo en uno de 60-320 kW, armarios hasta 720 kW, surtidores hasta 500 A, suministrados por Tychronic.'
    },
    pt: {
      title: 'Carregamento rápido CC — de 60 a 720 kW, tudo-em-um e split | Tychronic',
      desc: 'Carregamento rápido CC StarCharge verificado: Jupiter V4 60 kW, Titan V4 320 kW e Titan V5 180 kW tudo-em-um, armários de potência Nova de 360/480/720 kW com dispensadores Triton, Aries, Seraph, Hydrus e Neptune. 150-1000 Vdc, CCS2, OCPP 1.6J, CE.',
      ogDesc: 'Especificações CC StarCharge verificadas: tudo-em-um de 60-320 kW, armários até 720 kW, dispensadores até 500 A, fornecidos pela Tychronic.'
    },
    fr: {
      title: 'Recharge rapide DC — de 60 à 720 kW, monobloc et split | Tychronic',
      desc: 'Recharge rapide DC StarCharge vérifiée : Jupiter V4 60 kW, Titan V4 320 kW et Titan V5 180 kW monoblocs, armoires de puissance Nova 360/480/720 kW avec bornes Triton, Aries, Seraph, Hydrus et Neptune. 150-1000 V DC, CCS2, OCPP 1.6J, CE.',
      ogDesc: 'Caractéristiques DC StarCharge vérifiées : monoblocs 60-320 kW, armoires jusqu’à 720 kW, bornes jusqu’à 500 A, via Tychronic.'
    },
    ru: {
      title: 'Быстрая зарядка DC — от 60 до 720 кВт, моноблок и split | Tychronic',
      desc: 'Быстрая зарядка DC StarCharge, проверенные данные: Jupiter V4 60 кВт, Titan V4 320 кВт и Titan V5 180 кВт моноблоки, силовые шкафы Nova 360/480/720 кВт с постами Triton, Aries, Seraph, Hydrus и Neptune. 150-1000 В DC, CCS2, OCPP 1.6J, CE.',
      ogDesc: 'Проверенные характеристики DC StarCharge: моноблоки 60-320 кВт, шкафы до 720 кВт, посты до 500 А, поставки через Tychronic.'
    },
    ar: {
      title: 'الشحن السريع بالتيار المستمر — من 60 إلى 720 كيلوواط | تايكرونيك',
      desc: 'شحن سريع بالتيار المستمر من StarCharge بمواصفات مؤكدة: Jupiter V4 بقدرة 60 كيلوواط، Titan V4 بقدرة 320 كيلوواط، وTitan V5 بقدرة 180 كيلوواط، وخزائن قدرة Nova بسعة 360/480/720 كيلوواط مع وحدات Triton وAries وSeraph وHydrus وNeptune. 150-1000 فولت، CCS2، OCPP 1.6J، CE.',
      ogDesc: 'مواصفات شحن سريع مؤكدة من StarCharge: وحدات متكاملة 60-320 كيلوواط، خزائن حتى 720 كيلوواط، وحدات حتى 500 أمبير، عبر تايكرونيك.'
    },
    vi: {
      title: 'Sạc nhanh DC — 60 đến 720 kW, liền khối và tách rời | Tychronic',
      desc: 'Sạc nhanh DC StarCharge đã xác minh: Jupiter V4 60 kW, Titan V4 320 kW và Titan V5 180 kW liền khối, tủ nguồn Nova 360/480/720 kW với trụ Triton, Aries, Seraph, Hydrus và Neptune. 150-1000 Vdc, CCS2, OCPP 1.6J, CE.',
      ogDesc: 'Thông số sạc nhanh DC StarCharge đã xác minh: liền khối 60-320 kW, tủ nguồn đến 720 kW, trụ đến 500 A, cung ứng qua Tychronic.'
    }
  }
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const setMeta = (html, attr, name, value) => {
  const re = new RegExp('(<meta ' + attr + '="' + name + '" content=")[^"]*(")');
  return html.replace(re, (m, a, b) => a + esc(value) + b);
};

export const onRequest = async (context) => {
  const { request, env, next } = context;
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, '') || '/';

  // --- admin Basic Auth (unchanged) ---
  if (path === '/admin' || path === '/admin.html') {
    const hdr = request.headers.get('Authorization') || '';
    let ok = false;
    if (hdr.startsWith('Basic ')) {
      try {
        const raw = atob(hdr.slice(6));
        const i = raw.indexOf(':');
        ok = raw.slice(0, i) === env.STATS_USER && raw.slice(i + 1) === env.STATS_PASS;
      } catch (_) {}
    }
    if (!ok) {
      return new Response('Unauthorized', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Tychronic Stats", charset="UTF-8"' }
      });
    }
  }

  const res = await next();

  // --- server-side head localization for /?lang=xx and /storage-*.html?lang=xx ---
  const lang = url.searchParams.get('lang');
  const isHome = path === '/' && !!META[lang];
  const isPage = !!(PAGES[path] && PAGES[path][lang]);
  if ((!isHome && !isPage) || !lang || lang === 'en') return res;
  const ct = res.headers.get('content-type') || '';
  if (ct.indexOf('text/html') === -1) return res;

  const m = isPage ? PAGES[path][lang] : META[lang];
  const selfUrl = isPage
    ? SITE + path.slice(1) + '?lang=' + lang
    : SITE + '?lang=' + lang;
  let html = await res.text();
  html = html
    .replace('<html lang="en">', '<html lang="' + lang + '"' + (lang === 'ar' ? ' dir="rtl"' : '') + '>')
    .replace(/<title>[^<]*<\/title>/, '<title>' + esc(m.title) + '</title>');
  html = setMeta(html, 'name', 'description', m.desc);
  html = setMeta(html, 'property', 'og:title', m.title);
  html = setMeta(html, 'property', 'og:description', m.ogDesc);
  html = setMeta(html, 'property', 'og:url', selfUrl);
  html = setMeta(html, 'name', 'twitter:title', m.title);
  html = setMeta(html, 'name', 'twitter:description', m.ogDesc);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, '$1' + selfUrl + '$2');

  const headers = new Headers(res.headers);
  headers.delete('content-length');
  headers.delete('content-encoding');
  return new Response(html, { status: res.status, headers });
};
