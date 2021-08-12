(ns app.renderer.db)

(def sample-article

  {:article_id 1,
   :name "foo",
   :source "bar",
   :original
   "\nLe ministre de l'Éducation du Québec, Jean-François Roberge, a fait savoir mercredi lors de la présentation du plan du gouvernement en vue de la rentrée scolaire 2021-2022 qu'en raison des risques que fait peser le variant Delta, le masque devra être porté par les élèves du primaire et du secondaire en certaines circonstances.\n\nEn fait, les élèves pourront évoluer sans masque pour la plus grande partie de leur présence à l'école, soit en classe, à l'extérieur et au service de garde. Celui-ci sera cependant requis dans les autobus scolaires, où des places seront assignées aux élèves, et dans les aires communes.\n\nLes autobus et les aires communes sont des endroits où les jeunes se retrouvent souvent entassés et au coude-à-coude, a fait valoir le ministre Roberge, ce qui requiert plus de précautions, dit-il.\n\nQuant aux enseignants, ils ne seront pas obligés de porter le masque en classe si une distance de deux mètres avec les élèves est respectée. Il n'est pas non plus question pour le moment d'obliger les enseignants à se faire vacciner.\n\nMalgré la crainte d’une résurgence d’éclosions de COVID-19, le ministre Roberge a aussi fait savoir que les classes-bulles ne seront pas de mise cette année, ce qui permettra le retour des cours à option au secondaire, ainsi que les programmes de sport-études, d’arts-études et les activités parascolaires.\n",
   :word_ids
   "1$2$3$4$5$6$7$8$9$10$8$11$12$13$14$15$4$16$17$6$18$6$19$20$21$4$16$22$23$24$25$26$27$28$29$12$30$31$32$33$8$31$34$35$36$37$38$39$40$6$41$42$6$43$20$44$45$46$47$48$12$8$39$40$49$50$51$34$52$16$53$54$55$4$56$57$58$59$8$60$20$61$8$58$62$42$63$64$4$65$46$66$67$68$69$70$39$71$72$8$73$27$74$75$76$77$40$8$42$70$39$78$79$46$47$80$71$42$39$78$79$81$27$82$73$39$83$84$85$86$87$42$63$88$8$11$12$89$31$3$10$8$90$91$92$53$4$93$8$94$46$47$95$77$96$8$97$98$75$99$100$4$101$31$34$20$61$102$103$104$4$105$106$107$39$40$108$109$46$110$111$99$112$53$113$52$31$114$115$39$96$58$84$116$117$46$47$118$16$119$120$121$122$4$123$8$31$3$10$11$124$12$13$29$39$125$98$75$99$4$126$127$128$8$90$91$129$31$130$27$131$58$132$63$43$8$133$29$39$134$4$135$8$136$42$39$137$138$46$1",
   :word-data
   [{:word_id 1, :name "\n", :comfort 0, :translation nil}
    {:word_id 2, :name "Le", :comfort 0, :translation nil}
    {:word_id 3, :name "ministre", :comfort 0, :translation nil}
    {:word_id 4, :name "de", :comfort 0, :translation nil}
    {:word_id 5, :name "l'Éducation", :comfort 0, :translation nil}
    {:word_id 6, :name "du", :comfort 0, :translation nil}
    {:word_id 7, :name "Québec", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 9, :name "Jean-François", :comfort 0, :translation nil}
    {:word_id 10, :name "Roberge", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 11, :name "a", :comfort 0, :translation nil}
    {:word_id 12, :name "fait", :comfort 0, :translation nil}
    {:word_id 13, :name "savoir", :comfort 0, :translation nil}
    {:word_id 14, :name "mercredi", :comfort 0, :translation nil}
    {:word_id 15, :name "lors", :comfort 0, :translation nil}
    {:word_id 4, :name "de", :comfort 0, :translation nil}
    {:word_id 16, :name "la", :comfort 0, :translation nil}
    {:word_id 17, :name "présentation", :comfort 0, :translation nil}
    {:word_id 6, :name "du", :comfort 0, :translation nil}
    {:word_id 18, :name "plan", :comfort 0, :translation nil}
    {:word_id 6, :name "du", :comfort 0, :translation nil}
    {:word_id 19, :name "gouvernement", :comfort 0, :translation nil}
    {:word_id 20, :name "en", :comfort 0, :translation nil}
    {:word_id 21, :name "vue", :comfort 0, :translation nil}
    {:word_id 4, :name "de", :comfort 0, :translation nil}
    {:word_id 16, :name "la", :comfort 0, :translation nil}
    {:word_id 22, :name "rentrée", :comfort 0, :translation nil}
    {:word_id 23, :name "scolaire", :comfort 0, :translation nil}
    {:word_id 24, :name "2021-2022", :comfort 0, :translation nil}
    {:word_id 25, :name "qu'en", :comfort 0, :translation nil}
    {:word_id 26, :name "raison", :comfort 0, :translation nil}
    {:word_id 27, :name "des", :comfort 0, :translation nil}
    {:word_id 28, :name "risques", :comfort 0, :translation nil}
    {:word_id 29, :name "que", :comfort 0, :translation nil}
    {:word_id 12, :name "fait", :comfort 0, :translation nil}
    {:word_id 30, :name "peser", :comfort 0, :translation nil}
    {:word_id 31, :name "le", :comfort 0, :translation nil}
    {:word_id 32, :name "variant", :comfort 0, :translation nil}
    {:word_id 33, :name "Delta", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 31, :name "le", :comfort 0, :translation nil}
    {:word_id 34, :name "masque", :comfort 0, :translation nil}
    {:word_id 35, :name "devra", :comfort 0, :translation nil}
    {:word_id 36, :name "être", :comfort 0, :translation nil}
    {:word_id 37, :name "porté", :comfort 0, :translation nil}
    {:word_id 38, :name "par", :comfort 0, :translation nil}
    {:word_id 39, :name "les", :comfort 0, :translation nil}
    {:word_id 40, :name "élèves", :comfort 0, :translation nil}
    {:word_id 6, :name "du", :comfort 0, :translation nil}
    {:word_id 41, :name "primaire", :comfort 0, :translation nil}
    {:word_id 42, :name "et", :comfort 0, :translation nil}
    {:word_id 6, :name "du", :comfort 0, :translation nil}
    {:word_id 43, :name "secondaire", :comfort 0, :translation nil}
    {:word_id 20, :name "en", :comfort 0, :translation nil}
    {:word_id 44, :name "certaines", :comfort 0, :translation nil}
    {:word_id 45, :name "circonstances", :comfort 0, :translation nil}
    {:word_id 46, :name ".", :comfort 0, :translation nil}
    {:word_id 47, :name "\n\n", :comfort 0, :translation nil}
    {:word_id 48, :name "En", :comfort 0, :translation nil}
    {:word_id 12, :name "fait", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 39, :name "les", :comfort 0, :translation nil}
    {:word_id 40, :name "élèves", :comfort 0, :translation nil}
    {:word_id 49, :name "pourront", :comfort 0, :translation nil}
    {:word_id 50, :name "évoluer", :comfort 0, :translation nil}
    {:word_id 51, :name "sans", :comfort 0, :translation nil}
    {:word_id 34, :name "masque", :comfort 0, :translation nil}
    {:word_id 52, :name "pour", :comfort 0, :translation nil}
    {:word_id 16, :name "la", :comfort 0, :translation nil}
    {:word_id 53, :name "plus", :comfort 0, :translation nil}
    {:word_id 54, :name "grande", :comfort 0, :translation nil}
    {:word_id 55, :name "partie", :comfort 0, :translation nil}
    {:word_id 4, :name "de", :comfort 0, :translation nil}
    {:word_id 56, :name "leur", :comfort 0, :translation nil}
    {:word_id 57, :name "présence", :comfort 0, :translation nil}
    {:word_id 58, :name "à", :comfort 0, :translation nil}
    {:word_id 59, :name "l'école", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 60, :name "soit", :comfort 0, :translation nil}
    {:word_id 20, :name "en", :comfort 0, :translation nil}
    {:word_id 61, :name "classe", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 58, :name "à", :comfort 0, :translation nil}
    {:word_id 62, :name "l'extérieur", :comfort 0, :translation nil}
    {:word_id 42, :name "et", :comfort 0, :translation nil}
    {:word_id 63, :name "au", :comfort 0, :translation nil}
    {:word_id 64, :name "service", :comfort 0, :translation nil}
    {:word_id 4, :name "de", :comfort 0, :translation nil}
    {:word_id 65, :name "garde", :comfort 0, :translation nil}
    {:word_id 46, :name ".", :comfort 0, :translation nil}
    {:word_id 66, :name "Celui-ci", :comfort 0, :translation nil}
    {:word_id 67, :name "sera", :comfort 0, :translation nil}
    {:word_id 68, :name "cependant", :comfort 0, :translation nil}
    {:word_id 69, :name "requis", :comfort 0, :translation nil}
    {:word_id 70, :name "dans", :comfort 0, :translation nil}
    {:word_id 39, :name "les", :comfort 0, :translation nil}
    {:word_id 71, :name "autobus", :comfort 0, :translation nil}
    {:word_id 72, :name "scolaires", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 73, :name "où", :comfort 0, :translation nil}
    {:word_id 27, :name "des", :comfort 0, :translation nil}
    {:word_id 74, :name "places", :comfort 0, :translation nil}
    {:word_id 75, :name "seront", :comfort 0, :translation nil}
    {:word_id 76, :name "assignées", :comfort 0, :translation nil}
    {:word_id 77, :name "aux", :comfort 0, :translation nil}
    {:word_id 40, :name "élèves", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 42, :name "et", :comfort 0, :translation nil}
    {:word_id 70, :name "dans", :comfort 0, :translation nil}
    {:word_id 39, :name "les", :comfort 0, :translation nil}
    {:word_id 78, :name "aires", :comfort 0, :translation nil}
    {:word_id 79, :name "communes", :comfort 0, :translation nil}
    {:word_id 46, :name ".", :comfort 0, :translation nil}
    {:word_id 47, :name "\n\n", :comfort 0, :translation nil}
    {:word_id 80, :name "Les", :comfort 0, :translation nil}
    {:word_id 71, :name "autobus", :comfort 0, :translation nil}
    {:word_id 42, :name "et", :comfort 0, :translation nil}
    {:word_id 39, :name "les", :comfort 0, :translation nil}
    {:word_id 78, :name "aires", :comfort 0, :translation nil}
    {:word_id 79, :name "communes", :comfort 0, :translation nil}
    {:word_id 81, :name "sont", :comfort 0, :translation nil}
    {:word_id 27, :name "des", :comfort 0, :translation nil}
    {:word_id 82, :name "endroits", :comfort 0, :translation nil}
    {:word_id 73, :name "où", :comfort 0, :translation nil}
    {:word_id 39, :name "les", :comfort 0, :translation nil}
    {:word_id 83, :name "jeunes", :comfort 0, :translation nil}
    {:word_id 84, :name "se", :comfort 0, :translation nil}
    {:word_id 85, :name "retrouvent", :comfort 0, :translation nil}
    {:word_id 86, :name "souvent", :comfort 0, :translation nil}
    {:word_id 87, :name "entassés", :comfort 0, :translation nil}
    {:word_id 42, :name "et", :comfort 0, :translation nil}
    {:word_id 63, :name "au", :comfort 0, :translation nil}
    {:word_id 88, :name "coude-à-coude", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 11, :name "a", :comfort 0, :translation nil}
    {:word_id 12, :name "fait", :comfort 0, :translation nil}
    {:word_id 89, :name "valoir", :comfort 0, :translation nil}
    {:word_id 31, :name "le", :comfort 0, :translation nil}
    {:word_id 3, :name "ministre", :comfort 0, :translation nil}
    {:word_id 10, :name "Roberge", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 90, :name "ce", :comfort 0, :translation nil}
    {:word_id 91, :name "qui", :comfort 0, :translation nil}
    {:word_id 92, :name "requiert", :comfort 0, :translation nil}
    {:word_id 53, :name "plus", :comfort 0, :translation nil}
    {:word_id 4, :name "de", :comfort 0, :translation nil}
    {:word_id 93, :name "précautions", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 94, :name "dit-il", :comfort 0, :translation nil}
    {:word_id 46, :name ".", :comfort 0, :translation nil}
    {:word_id 47, :name "\n\n", :comfort 0, :translation nil}
    {:word_id 95, :name "Quant", :comfort 0, :translation nil}
    {:word_id 77, :name "aux", :comfort 0, :translation nil}
    {:word_id 96, :name "enseignants", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 97, :name "ils", :comfort 0, :translation nil}
    {:word_id 98, :name "ne", :comfort 0, :translation nil}
    {:word_id 75, :name "seront", :comfort 0, :translation nil}
    {:word_id 99, :name "pas", :comfort 0, :translation nil}
    {:word_id 100, :name "obligés", :comfort 0, :translation nil}
    {:word_id 4, :name "de", :comfort 0, :translation nil}
    {:word_id 101, :name "porter", :comfort 0, :translation nil}
    {:word_id 31, :name "le", :comfort 0, :translation nil}
    {:word_id 34, :name "masque", :comfort 0, :translation nil}
    {:word_id 20, :name "en", :comfort 0, :translation nil}
    {:word_id 61, :name "classe", :comfort 0, :translation nil}
    {:word_id 102, :name "si", :comfort 0, :translation nil}
    {:word_id 103, :name "une", :comfort 0, :translation nil}
    {:word_id 104, :name "distance", :comfort 0, :translation nil}
    {:word_id 4, :name "de", :comfort 0, :translation nil}
    {:word_id 105, :name "deux", :comfort 0, :translation nil}
    {:word_id 106, :name "mètres", :comfort 0, :translation nil}
    {:word_id 107, :name "avec", :comfort 0, :translation nil}
    {:word_id 39, :name "les", :comfort 0, :translation nil}
    {:word_id 40, :name "élèves", :comfort 0, :translation nil}
    {:word_id 108, :name "est", :comfort 0, :translation nil}
    {:word_id 109, :name "respectée", :comfort 0, :translation nil}
    {:word_id 46, :name ".", :comfort 0, :translation nil}
    {:word_id 110, :name "Il", :comfort 0, :translation nil}
    {:word_id 111, :name "n'est", :comfort 0, :translation nil}
    {:word_id 99, :name "pas", :comfort 0, :translation nil}
    {:word_id 112, :name "non", :comfort 0, :translation nil}
    {:word_id 53, :name "plus", :comfort 0, :translation nil}
    {:word_id 113, :name "question", :comfort 0, :translation nil}
    {:word_id 52, :name "pour", :comfort 0, :translation nil}
    {:word_id 31, :name "le", :comfort 0, :translation nil}
    {:word_id 114, :name "moment", :comfort 0, :translation nil}
    {:word_id 115, :name "d'obliger", :comfort 0, :translation nil}
    {:word_id 39, :name "les", :comfort 0, :translation nil}
    {:word_id 96, :name "enseignants", :comfort 0, :translation nil}
    {:word_id 58, :name "à", :comfort 0, :translation nil}
    {:word_id 84, :name "se", :comfort 0, :translation nil}
    {:word_id 116, :name "faire", :comfort 0, :translation nil}
    {:word_id 117, :name "vacciner", :comfort 0, :translation nil}
    {:word_id 46, :name ".", :comfort 0, :translation nil}
    {:word_id 47, :name "\n\n", :comfort 0, :translation nil}
    {:word_id 118, :name "Malgré", :comfort 0, :translation nil}
    {:word_id 16, :name "la", :comfort 0, :translation nil}
    {:word_id 119, :name "crainte", :comfort 0, :translation nil}
    {:word_id 120, :name "d’une", :comfort 0, :translation nil}
    {:word_id 121, :name "résurgence", :comfort 0, :translation nil}
    {:word_id 122, :name "d’éclosions", :comfort 0, :translation nil}
    {:word_id 4, :name "de", :comfort 0, :translation nil}
    {:word_id 123, :name "COVID-19", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 31, :name "le", :comfort 0, :translation nil}
    {:word_id 3, :name "ministre", :comfort 0, :translation nil}
    {:word_id 10, :name "Roberge", :comfort 0, :translation nil}
    {:word_id 11, :name "a", :comfort 0, :translation nil}
    {:word_id 124, :name "aussi", :comfort 0, :translation nil}
    {:word_id 12, :name "fait", :comfort 0, :translation nil}
    {:word_id 13, :name "savoir", :comfort 0, :translation nil}
    {:word_id 29, :name "que", :comfort 0, :translation nil}
    {:word_id 39, :name "les", :comfort 0, :translation nil}
    {:word_id 125, :name "classes-bulles", :comfort 0, :translation nil}
    {:word_id 98, :name "ne", :comfort 0, :translation nil}
    {:word_id 75, :name "seront", :comfort 0, :translation nil}
    {:word_id 99, :name "pas", :comfort 0, :translation nil}
    {:word_id 4, :name "de", :comfort 0, :translation nil}
    {:word_id 126, :name "mise", :comfort 0, :translation nil}
    {:word_id 127, :name "cette", :comfort 0, :translation nil}
    {:word_id 128, :name "année", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 90, :name "ce", :comfort 0, :translation nil}
    {:word_id 91, :name "qui", :comfort 0, :translation nil}
    {:word_id 129, :name "permettra", :comfort 0, :translation nil}
    {:word_id 31, :name "le", :comfort 0, :translation nil}
    {:word_id 130, :name "retour", :comfort 0, :translation nil}
    {:word_id 27, :name "des", :comfort 0, :translation nil}
    {:word_id 131, :name "cours", :comfort 0, :translation nil}
    {:word_id 58, :name "à", :comfort 0, :translation nil}
    {:word_id 132, :name "option", :comfort 0, :translation nil}
    {:word_id 63, :name "au", :comfort 0, :translation nil}
    {:word_id 43, :name "secondaire", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 133, :name "ainsi", :comfort 0, :translation nil}
    {:word_id 29, :name "que", :comfort 0, :translation nil}
    {:word_id 39, :name "les", :comfort 0, :translation nil}
    {:word_id 134, :name "programmes", :comfort 0, :translation nil}
    {:word_id 4, :name "de", :comfort 0, :translation nil}
    {:word_id 135, :name "sport-études", :comfort 0, :translation nil}
    {:word_id 8, :name ",", :comfort 0, :translation nil}
    {:word_id 136, :name "d’arts-études", :comfort 0, :translation nil}
    {:word_id 42, :name "et", :comfort 0, :translation nil}
    {:word_id 39, :name "les", :comfort 0, :translation nil}
    {:word_id 137, :name "activités", :comfort 0, :translation nil}
    {:word_id 138, :name "parascolaires", :comfort 0, :translation nil}
    {:word_id 46, :name ".", :comfort 0, :translation nil}
    {:word_id 1, :name "\n", :comfort 0, :translation nil}]})









(def default-db
  {:current-view    "article"
   :articles        nil
   :current-article sample-article
   :loading?        false
   })
