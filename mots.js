const listeMots = [
  {
    mot: "tissu",
    definitionCourte: "Matière textile utilisée pour garnir les sièges.",
    definitionLongue: "Le tissu est une matière textile qui sert à recouvrir ou habiller des meubles ou des objets, offrant confort et esthétisme.",
    image: "image/tissu.jpg"
  },
  {
    mot: "cloutage",
    definitionCourte: "Action d'enfoncer les clous décoratifs.",
    definitionLongue: "Technique d'ameublement pour fixer des clous décoratifs afin d'embellir ou renforcer les meubles.",
    image: "image/cloutage.jpg"
  },
  {
    mot: "appointer",
    definitionCourte: "Mettre en place la toile ou le tissu sans fixer définitivement.",
    definitionLongue: "En tapisserie, poser des semences sans les enfoncer complètement afin de pré-fixer un textile avant ajustement final.",
    image: "image/appointer.jpg"
  },
  {
    mot: "brocart",
    definitionCourte: "Soie à gros motifs avec fil d’or ou d’argent.",
    definitionLongue: "Étoffe de soie à gros motifs rehaussés de fil d’or ou d’argent. Terme apparu en France au XVIe siècle.",
    image: "image/brocart.jpg"
  },
  {
    mot: "brocatelle",
    definitionCourte: "Soie à motifs satinés, fond sergé lin.",
    definitionLongue: "Étoffe de soie à motifs satinés de coloris variés, armure sergée, fils de trame en lin.",
    image: "image/brocatelle.jpg"
  },
  {
    mot: "broché",
    definitionCourte: "Motifs en relief à trame supplémentaire.",
    definitionLongue: "Étoffe où des motifs détachés en relief sont produits par des fils de trame ou chaîne supplémentaires flottant sur l’envers.",
    image: "image/broche.jpg"
  },
  {
    mot: "damas",
    definitionCourte: "Soie à motif mat sur fond brillant.",
    definitionLongue: "Étoffe de soie monochrome avec motif mat sur fond satin brillant.",
    image: "image/damas.jpg"
  },
  {
    mot: "doupion",
    definitionCourte: "Toile à trame avec grosseurs irrégulières.",
    definitionLongue: "Toile dont le fil de trame comprend des grosseurs irrégulières. À l’origine, soie de cocon double.",
    image: "image/doupion.jpg"
  },
  {
    mot: "drap de laine",
    definitionCourte: "Laine sergée souvent verte.",
    definitionLongue: "Tissu de laine à armure sergée, chaîne à forte torsion, trame floches. Souvent uni, vert.",
    image: "image/drapdelain.jpg"
  },
  {
    mot: "feutrine",
    definitionCourte: "Etoffe légère non tissée, feutrée.",
    definitionLongue: "Étoffe issue du pelage animal, foulée et feutrée, ressemblant au drap de laine mais plus léger, réalisée avec des liants ou colles.",
    image: "image/feutrine.jpg"
  },
  {
    mot: "gourgouran",
    definitionCourte: "Soie unie, rayures satin/moirée.",
    definitionLongue: "Étoffe de soie unie à rayures verticales formées par opposition d’armures satin et moirée. Peut être brodée de fleurs ou oiseaux.",
    image: "image/gourgouran.jpg"
  },
  {
    mot: "lampas",
    definitionCourte: "Soie tissée à dessins multicolores.",
    definitionLongue: "Étoffe de soie tissée à dessins multicolores sur un fond uni de satin.",
    image: "image/lampas.jpg"
  },
  {
    mot: "moire",
    definitionCourte: "Apprêt écrasé à reflets ondés.",
    definitionLongue: "Étoffe ayant reçu un apprêt écrasé à la calandre créant des reflets ondés. Procédé inventé par Tignat en 1843.",
    image: "image/moire.jpg"
  },
  {
    mot: "natté",
    definitionCourte: "Tissage toile, fils levés en groupe.",
    definitionLongue: "Tissage de toile où un nombre égal de fils de chaîne se lève pour faire passer le même nombre de fils de trame.",
    image: "image/natte.jpg"
  },
  {
    mot: "ottoman",
    definitionCourte: "Trame coton à côtes horizontales.",
    definitionLongue: "Tissu à trame de coton donnant des côtes horizontales. Chaîne tendue en laine, soie, rayonne ou coton.",
    image: "image/ottoman.jpg"
  },
  {
    mot: "percale glacée",
    definitionCourte: "Coton très fin et serré, imprimé.",
    definitionLongue: "Étoffe de coton très fine et serrée, le plus souvent imprimée.",
    image: "image/percale.jpg"
  },
  {
    mot: "reps",
    definitionCourte: "Cannelures longitudinales.",
    definitionLongue: "Étoffe à cannelures longitudinales, parallèle aux lisières, en soie, laine ou coton.",
    image: "image/reps.jpg"
  },
  {
    mot: "taffetas",
    definitionCourte: "Soie très fine et brillante.",
    definitionLongue: "Étoffe de soie ou synthétique très fine, sans envers ni endroit, légèrement brillante à reflets changeants.",
    image: "image/taffetas.jpg"
  },
  {
    mot: "tartan",
    definitionCourte: "Laine à motif de carreaux écossais.",
    definitionLongue: "Étoffe de laine cardée motif de carreaux, tissu traditionnel écossais.",
    image: "image/tartan.jpg"
  },
  {
    mot: "toile de jouy",
    definitionCourte: "Coton/lin imprimé de scènes champêtres.",
    definitionLongue: "Tissu de coton ou lin imprimé de scènes champêtres sur fond écru, créé à Jouy-en-Josas en 1760.",
    image: "image/toiledejouy.jpg"
  },
  {
    mot: "satin",
    definitionCourte: "Endroit brillant, envers mat.",
    definitionLongue: "Étoffe à liages cachés sous de longs flottés, endroit brillant, revers mat, peut être de soie, lin, coton ou laine.",
    image: "image/satin.jpg"
  },
  {
    mot: "velours",
    definitionCourte: "Soie/laine/coton à poils coupés.",
    definitionLongue: "Étoffe à poils coupés, rasés ou bouclés, à double chaîne. Les tiges de fer laissent des flottés qui, tondus, constituent les poils.",
    image: "image/velours.jpg"
  },
  {
    mot: "velours gaufré",
    definitionCourte: "Velours avec impression relief.",
    definitionLongue: "Velours coupé introduit entre deux cylindres, dont l’un gravé donne une impression en relief. Procédé connu depuis 1680.",
    image: "image/veloursgaufre.jpg"
  },
  {
    mot: "velours de gene",
    definitionCourte: "Velours à grands dessins colorés.",
    definitionLongue: "Velours à grands dessins de plusieurs couleurs, fond satiné visible entre les motifs, créé à Gênes au XVIe siècle.",
    image: "image/veloursgene.jpg"
  }
];