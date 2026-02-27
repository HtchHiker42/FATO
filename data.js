// ============================================================
// FROM ALPHA TO OMEGA — Anne Groton's Ancient Greek Textbook
// Chapter-by-chapter vocabulary and grammar data
// ============================================================

const CHAPTERS = [
  {
    id: 1,
    title: "The Greek Alphabet",
    greekTitle: "Τὸ Ἀλφάβητον",
    summary: "Introduction to the Greek alphabet, vowels, consonants, diphthongs, and basic pronunciation.",
    grammar: [
      "The Greek alphabet has 24 letters.",
      "Vowels: α, ε, η, ι, ο, υ, ω. Short vowels: α, ε, ι, ο, υ. Long vowels: η, ω (always long); α, ι, υ (can be either).",
      "Diphthongs: αι, αυ, ει, ευ, οι, ου, υι, ᾳ, ῃ, ῳ (improper diphthongs).",
      "Every Greek word beginning with a vowel has a breathing mark: smooth (᾿) or rough (῾).",
      "Rough breathing = /h/ sound before the vowel."
    ],
    vocab: [
      { greek: "ἄνθρωπος, -ου, ὁ", english: "human being, person" },
      { greek: "θεός, -οῦ, ὁ/ἡ", english: "god, goddess" },
      { greek: "λόγος, -ου, ὁ", english: "word, speech, reason" },
      { greek: "ὁδός, -οῦ, ἡ", english: "road, way, path" },
      { greek: "δῶρον, -ου, τό", english: "gift" }
    ]
  },
  {
    id: 2,
    title: "Accents",
    greekTitle: "Οἱ Τόνοι",
    summary: "Greek accent system: acute, grave, and circumflex. Rules for placement and recessive accents.",
    grammar: [
      "Three accents: acute (´) on any of last three syllables; grave (`) replaces acute on ultima before another word; circumflex (῀) on long ultima or penult.",
      "Recessive accent: verbs accent as far back as possible (third from last syllable if ultima is short, second from last if long).",
      "Persistent accent: nouns and adjectives keep accent on same syllable unless rules prevent it.",
      "Syllables: ultima (last), penult (second-to-last), antepenult (third-to-last).",
      "Circumflex can only fall on long syllable."
    ],
    vocab: [
      { greek: "ἀγαθός, -ή, -όν", english: "good, noble" },
      { greek: "κακός, -ή, -όν", english: "bad, evil, cowardly" },
      { greek: "καλός, -ή, -όν", english: "beautiful, fine, noble" },
      { greek: "μικρός, -ά, -όν", english: "small, little" },
      { greek: "μακρός, -ά, -όν", english: "long, large" },
      { greek: "νέος, -α, -ον", english: "young, new" }
    ]
  },
  {
    id: 3,
    title: "Introduction to Nouns",
    greekTitle: "Αἱ Ὀνομαστικαί",
    summary: "First and second declension nouns. Definite article. Nominative and accusative cases.",
    grammar: [
      "Greek is an inflected language: endings change to show grammatical function.",
      "Cases: Nominative (subject), Genitive (possession), Dative (indirect object), Accusative (direct object), Vocative (address).",
      "Second declension masculine: λόγος, λόγου, λόγῳ, λόγον, λόγε / λόγοι, λόγων, λόγοις, λόγους, λόγοι.",
      "Second declension neuter: δῶρον, δώρου, δώρῳ, δῶρον, δῶρον / δῶρα, δώρων, δώροις, δῶρα, δῶρα.",
      "Definite article: ὁ, ἡ, τό (nom.); τόν, τήν, τό (acc.).",
      "Article agrees with noun in gender, number, case."
    ],
    vocab: [
      { greek: "ὁ ἄνθρωπος", english: "the person, the human being", category: "vocab" },
      { greek: "ὁ λόγος", english: "the word, the speech, reason", category: "vocab" },
      { greek: "ὁ θεός", english: "the god", category: "vocab" },
      { greek: "τὸ δῶρον", english: "the gift", category: "vocab" },
      { greek: "ἡ ὁδός", english: "the road, the way", category: "vocab" },
      { greek: "ὁ/ἡ φίλος, -η", english: "friend, dear one", category: "vocab" },
      { greek: "ὁ ἵππος", english: "horse", category: "vocab" },
      { greek: "ἡ νῆσος", english: "island", category: "vocab" },
      { greek: "ὁ κίνδυνος", english: "danger", category: "vocab" },
      { greek: "ὁ νόμος", english: "law, custom", category: "vocab" }
    ]
  },
  {
    id: 4,
    title: "First Declension Nouns",
    greekTitle: "Ἡ Πρώτη Κλίσις",
    summary: "First declension feminine nouns with -η, -α endings. Masculine first-declension nouns.",
    grammar: [
      "First declension feminine (-η type): ἀρχή, ἀρχῆς, ἀρχῇ, ἀρχήν / ἀρχαί, ἀρχῶν, ἀρχαῖς, ἀρχάς.",
      "First declension feminine (-α type, after ε/ι/ρ): χώρα, χώρας, χώρᾳ, χώραν / χῶραι, χωρῶν, χώραις, χώρας.",
      "First declension masculine: νεανίας, νεανίου, νεανίᾳ, νεανίαν, νεανία / νεανίαι, νεανιῶν, νεανίαις, νεανίας.",
      "Genitive plural of first declension always has circumflex: -ῶν.",
      "Masculine first-declension genitive singular: -ου (like second declension)."
    ],
    vocab: [
      { greek: "ἡ ἀρχή", english: "beginning, rule, empire", category: "vocab" },
      { greek: "ἡ χώρα", english: "land, country, region", category: "vocab" },
      { greek: "ἡ γνώμη", english: "mind, judgment, opinion", category: "vocab" },
      { greek: "ἡ εἰρήνη", english: "peace", category: "vocab" },
      { greek: "ἡ τιμή", english: "honor, price", category: "vocab" },
      { greek: "ἡ ψυχή", english: "soul, life", category: "vocab" },
      { greek: "ἡ οἰκία", english: "house, household", category: "vocab" },
      { greek: "ἡ ἀλήθεια", english: "truth", category: "vocab" },
      { greek: "ὁ νεανίας", english: "young man", category: "vocab" },
      { greek: "ὁ πολίτης", english: "citizen", category: "vocab" },
      { greek: "ὁ στρατηγός", english: "general", category: "vocab" }
    ]
  },
  {
    id: 5,
    title: "Introduction to Verbs",
    greekTitle: "Τὰ Ῥήματα",
    summary: "Present active indicative. Personal endings. Thematic vowel. The verb εἰμί.",
    grammar: [
      "Present active indicative endings: -ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν).",
      "Thematic vowel ο/ε connects stem to ending.",
      "εἰμί (to be): εἰμί, εἶ, ἐστί(ν), ἐσμέν, ἐστέ, εἰσί(ν). Always enclitic except εἶ.",
      "Enclitic: word that leans on previous word for accent.",
      "Movable ν (ν-movable): added to 3rd person words ending in -ι or -ε before vowels or at end of sentence."
    ],
    vocab: [
      { greek: "παιδεύω", english: "educate, train", category: "verb" },
      { greek: "λύω", english: "loosen, free, destroy", category: "verb" },
      { greek: "γράφω", english: "write, scratch", category: "verb" },
      { greek: "λέγω", english: "say, speak, tell", category: "verb" },
      { greek: "ἄγω", english: "lead, bring, drive", category: "verb" },
      { greek: "ἔχω", english: "have, hold", category: "verb" },
      { greek: "βλέπω", english: "look, see", category: "verb" },
      { greek: "πιστεύω", english: "believe, trust (+dat.)", category: "verb" },
      { greek: "εἰμί", english: "be", category: "verb" },
      { greek: "καί", english: "and, also, even", category: "particle" },
      { greek: "ἀλλά", english: "but (strong contrast)", category: "particle" },
      { greek: "δέ", english: "but, and (postpositive)", category: "particle" }
    ]
  },
  {
    id: 6,
    title: "Present Middle/Passive Indicative",
    greekTitle: "Μέση/Παθητική Φωνή",
    summary: "Middle and passive voice. Present middle/passive endings. Reflexive use of middle.",
    grammar: [
      "Middle voice indicates subject acts on or for themselves.",
      "Passive voice: action is done to the subject.",
      "In present tense, middle and passive forms are identical.",
      "Present middle/passive endings: -ομαι, -ει/-ῃ, -εται, -όμεθα, -εσθε, -ονται.",
      "Middle infinitive: -εσθαι (παιδεύεσθαι)."
    ],
    vocab: [
      { greek: "ἄρχω", english: "rule (gen.); begin (gen. or inf.)", category: "verb" },
      { greek: "γίγνομαι", english: "become, be born, happen", category: "verb" },
      { greek: "ἔρχομαι", english: "come, go", category: "verb" },
      { greek: "φέρω", english: "carry, bear, bring", category: "verb" },
      { greek: "οὐ/οὐκ/οὐχ", english: "not (before smooth/rough breathing)", category: "particle" },
      { greek: "μή", english: "not (with non-indicative moods)", category: "particle" },
      { greek: "γάρ", english: "for (postpositive, explains)", category: "particle" },
      { greek: "οὖν", english: "therefore, then (postpositive)", category: "particle" }
    ]
  },
  {
    id: 7,
    title: "Imperfect Active Indicative",
    greekTitle: "Παρατατικός",
    summary: "Imperfect tense. Augment. Secondary active endings. Aspect vs. time.",
    grammar: [
      "Imperfect describes ongoing or repeated past action.",
      "Augment: ε- added to beginning of verb stem for past tenses.",
      "Syllabic augment: ε- before consonant (ἐ-παίδευ-ον).",
      "Temporal augment: lengthens initial vowel (ἀ→η, ε→η, ο→ω, αι→ῃ, etc.).",
      "Secondary active endings: -ον, -ες, -ε(ν), -ομεν, -ετε, -ον.",
      "ἦν, ἦσθα, ἦν, ἦμεν, ἦτε, ἦσαν (imperfect of εἰμί)."
    ],
    vocab: [
      { greek: "ἀκούω", english: "hear, listen to (+gen./acc.)", category: "verb" },
      { greek: "διδάσκω", english: "teach", category: "verb" },
      { greek: "θύω", english: "sacrifice, offer", category: "verb" },
      { greek: "κλέπτω", english: "steal", category: "verb" },
      { greek: "κρίνω", english: "judge, decide, separate", category: "verb" },
      { greek: "νομίζω", english: "consider, believe, practice", category: "verb" },
      { greek: "πέμπω", english: "send", category: "verb" },
      { greek: "ποιέω", english: "make, do, compose", category: "verb" },
      { greek: "τάττω", english: "arrange, assign, post", category: "verb" },
      { greek: "ὅτι", english: "that; because", category: "particle" },
      { greek: "ὡς", english: "as, that, how, when", category: "particle" }
    ]
  },
  {
    id: 8,
    title: "Imperfect Middle/Passive. Present Infinitive.",
    greekTitle: "Ἀπαρέμφατον",
    summary: "Imperfect middle/passive. Present active, middle, passive infinitives.",
    grammar: [
      "Imperfect middle/passive endings: -ομην, -ου, -ετο, -όμεθα, -εσθε, -οντο.",
      "Present active infinitive: -ειν (παιδεύειν).",
      "Present middle/passive infinitive: -εσθαι (παιδεύεσθαι).",
      "εἶναι = present infinitive of εἰμί.",
      "Complementary infinitive: used with verbs like 'want', 'be able', 'begin'.",
      "Infinitive has no subject of its own when subject = main verb's subject."
    ],
    vocab: [
      { greek: "βουλεύω", english: "plan, deliberate", category: "verb" },
      { greek: "βούλομαι", english: "want, wish", category: "verb" },
      { greek: "δύναμαι", english: "be able, can (+inf.)", category: "verb" },
      { greek: "κελεύω", english: "order, urge (+acc.+inf.)", category: "verb" },
      { greek: "ὁράω", english: "see, look at", category: "verb" },
      { greek: "ἡ θάλαττα", english: "sea", category: "vocab" },
      { greek: "ἡ δόξα", english: "opinion, glory, reputation", category: "vocab" },
      { greek: "ἡ γλῶσσα", english: "tongue, language", category: "vocab" }
    ]
  },
  {
    id: 9,
    title: "Future Active and Middle",
    greekTitle: "Μέλλων",
    summary: "Future tense. -σ- suffix. Future of εἰμί. Liquid futures.",
    grammar: [
      "Future active: verb stem + σ + active endings (παιδεύσω, παιδεύσεις...).",
      "Future middle: verb stem + σ + middle endings (παιδεύσομαι...).",
      "Liquid future: stems ending in λ, μ, ν, ρ use contract future (no σ): ἀγγελῶ, ἀγγελεῖς...",
      "Future of εἰμί: ἔσομαι, ἔσει/ἔσῃ, ἔσται, ἐσόμεθα, ἔσεσθε, ἔσονται.",
      "Deponent verbs: middle/passive form, active meaning."
    ],
    vocab: [
      { greek: "ἀγγέλλω", english: "announce, report", category: "verb" },
      { greek: "ἀποθνῄσκω", english: "die, be killed", category: "verb" },
      { greek: "κτείνω", english: "kill", category: "verb" },
      { greek: "μένω", english: "remain, stay, wait", category: "verb" },
      { greek: "φεύγω", english: "flee, be in exile", category: "verb" },
      { greek: "ἡ εὐδαιμονία", english: "happiness, prosperity", category: "vocab" },
      { greek: "ὁ πόλεμος", english: "war", category: "vocab" },
      { greek: "ἡ στρατιά", english: "army", category: "vocab" }
    ]
  },
  {
    id: 10,
    title: "The First and Second Aorist",
    greekTitle: "Ἀόριστος",
    summary: "Aorist tense: simple past action. First aorist (-σα) and second aorist. Aorist infinitive.",
    grammar: [
      "Aorist represents simple past action (no continuing aspect).",
      "First aorist active: augment + stem + σα + secondary endings: -σα, -σας, -σε(ν), -σαμεν, -σατε, -σαν.",
      "First aorist middle: -σάμην, -σω, -σατο, -σάμεθα, -σασθε, -σαντο.",
      "Second aorist uses different stem: λαμβάνω→ἔλαβον, λείπω→ἔλιπον.",
      "Second aorist endings identical to imperfect endings.",
      "Aorist active infinitive: -σαι (παιδεῦσαι); second aorist: -εῖν (λιπεῖν).",
      "Aorist middle infinitive: -σασθαι; second aorist middle: -έσθαι."
    ],
    vocab: [
      { greek: "βαίνω", english: "go, walk, step", category: "verb" },
      { greek: "γιγνώσκω", english: "know, recognize", category: "verb" },
      { greek: "εὑρίσκω", english: "find, discover", category: "verb" },
      { greek: "λαμβάνω", english: "take, seize, receive", category: "verb" },
      { greek: "λείπω", english: "leave, forsake", category: "verb" },
      { greek: "λύω", english: "loosen, free", category: "verb" },
      { greek: "πάσχω", english: "suffer, experience", category: "verb" },
      { greek: "τυγχάνω", english: "happen to, meet, obtain", category: "verb" },
      { greek: "ὁ στρατιώτης", english: "soldier", category: "vocab" }
    ]
  },
  {
    id: 11,
    title: "The Third Declension",
    greekTitle: "Ἡ Τρίτη Κλίσις",
    summary: "Third declension nouns. Finding the stem. Various stem types.",
    grammar: [
      "Third declension endings: nom. sg. varies; gen. sg. -ος; dat. sg. -ι; acc. sg. -α/-ν; voc. sg. varies.",
      "Plural: nom. -ες; gen. -ων; dat. -σι(ν); acc. -ας; voc. -ες.",
      "Stem found from genitive singular by removing -ος.",
      "Consonant stems: labial (π,β,φ)+σ→ψ; dental (τ,δ,θ) drops before σ; velar (κ,γ,χ)+σ→ξ.",
      "Neuter third declension: nom./acc./voc. same form.",
      "Sigma stems: e.g., γένος, γένους (η-stems contracted)."
    ],
    vocab: [
      { greek: "ὁ/ἡ ἄρχων, -οντος", english: "ruler, magistrate", category: "vocab" },
      { greek: "ὁ δαίμων, -ονος", english: "divine spirit, fate", category: "vocab" },
      { greek: "ὁ Ἕλλην, -ηνος", english: "Greek person", category: "vocab" },
      { greek: "ὁ/ἡ παῖς, παιδός", english: "child, boy, girl, slave", category: "vocab" },
      { greek: "ἡ πόλις, -εως", english: "city-state, city", category: "vocab" },
      { greek: "τὸ σῶμα, -ατος", english: "body", category: "vocab" },
      { greek: "τὸ ὄνομα, -ατος", english: "name", category: "vocab" },
      { greek: "τὸ πρᾶγμα, -ατος", english: "deed, thing, (pl.) affairs, trouble", category: "vocab" },
      { greek: "ὁ πατήρ, πατρός", english: "father", category: "vocab" },
      { greek: "ἡ μήτηρ, μητρός", english: "mother", category: "vocab" }
    ]
  },
  {
    id: 12,
    title: "Aorist and Future Passive",
    greekTitle: "Παθητικὴ Φωνή",
    summary: "Aorist passive: -θη- suffix. Future passive: -θησ-. Passive voice overview.",
    grammar: [
      "Aorist passive: augment + stem + θη + passive aorist endings: -θην, -θης, -θη, -θημεν, -θητε, -θησαν.",
      "Future passive: stem + θήσ + middle endings: -θήσομαι, -θήσει, etc.",
      "Passive infinitives: aorist -θῆναι; future -θήσεσθαι.",
      "Agent in passive constructions: ὑπό + genitive.",
      "Some verbs have 2nd aorist passive (-η- without θ)."
    ],
    vocab: [
      { greek: "διώκω", english: "pursue, chase, prosecute", category: "verb" },
      { greek: "κωλύω", english: "prevent, hinder (+acc.+inf.)", category: "verb" },
      { greek: "σῴζω", english: "save, preserve, keep safe", category: "verb" },
      { greek: "τιμάω", english: "honor, value, assess", category: "verb" },
      { greek: "ὑπό + gen.", english: "by (agent); under (place)", category: "prep" },
      { greek: "ὑπό + acc.", english: "under (motion toward)", category: "prep" },
      { greek: "ἡ νίκη", english: "victory", category: "vocab" },
      { greek: "ὁ πολέμιος", english: "enemy (in war)", category: "vocab" }
    ]
  },
  {
    id: 13,
    title: "Perfect and Pluperfect Active",
    greekTitle: "Παρακείμενος",
    summary: "Perfect system: reduplication, perfect active endings, pluperfect. Stative aspect.",
    grammar: [
      "Perfect indicates completed action with present relevance.",
      "Reduplication: first consonant + ε: παιδεύω→πεπαίδευκα.",
      "Verbs beginning with vowel take temporal augment for reduplication.",
      "Perfect active endings: -κα, -κας, -κε(ν), -καμεν, -κατε, -κασι(ν).",
      "Pluperfect: augment + reduplicated stem + past endings: -κειν/-κη, -κεις/-κης, -κει(ν), -κεμεν, -κετε, -κεσαν.",
      "Perfect active infinitive: -κέναι.",
      "Perfect active participle: -κώς, -κυῖα, -κός."
    ],
    vocab: [
      { greek: "γράφω, γέγραφα", english: "write; have written", category: "verb" },
      { greek: "λύω, λέλυκα", english: "free; have freed", category: "verb" },
      { greek: "πιστεύω, πεπίστευκα", english: "trust; have trusted", category: "verb" },
      { greek: "ἔτι", english: "still, yet", category: "particle" },
      { greek: "ἤδη", english: "already, now", category: "particle" },
      { greek: "νῦν", english: "now", category: "particle" },
      { greek: "τότε", english: "then, at that time", category: "particle" }
    ]
  },
  {
    id: 14,
    title: "Perfect and Pluperfect Middle/Passive",
    greekTitle: "Παρακείμενος Μ/Π",
    summary: "Perfect middle/passive: reduplication with middle/passive endings. Participles.",
    grammar: [
      "Perfect middle/passive endings: -μαι, -σαι, -ται, -μεθα, -σθε, -νται.",
      "No kappa (κ) in middle/passive perfect.",
      "Dental before μ/σ: complex changes (e.g., πεπαίδευμαι).",
      "Pluperfect middle/passive: -μην, -σο, -το, -μεθα, -σθε, -ντο.",
      "Perfect middle infinitive: -σθαι.",
      "Periphrastic perfect: perfect participle + εἰμί (especially in 3rd pl.)."
    ],
    vocab: [
      { greek: "αἱρέω", english: "take, capture, choose", category: "verb" },
      { greek: "ἀποκτείνω", english: "kill, put to death", category: "verb" },
      { greek: "βάλλω", english: "throw, hit, pelt", category: "verb" },
      { greek: "πράττω", english: "do, accomplish, fare", category: "verb" },
      { greek: "τρέπω", english: "turn, put to flight", category: "verb" },
      { greek: "ὁ/ἡ Βάρβαρος", english: "non-Greek, barbarian", category: "vocab" }
    ]
  },
  {
    id: 15,
    title: "Participles",
    greekTitle: "Μετοχαί",
    summary: "Present and aorist active participles. Attributive and predicate position. Genitive absolute.",
    grammar: [
      "Participle: verbal adjective — has tense and voice; declines like adjective.",
      "Present active participle: παιδεύ-ων, -ουσα, -ον (3rd decl. masc./neut., 1st decl. fem.).",
      "Aorist active participle: παιδεύ-σας, -σασα, -σαν.",
      "Attributive position: article + participle between article and noun, or after noun.",
      "Predicate position: participle outside article-noun group; often 'while X-ing', 'by X-ing'.",
      "Circumstantial participle: explains time, cause, means, condition, concession.",
      "Genitive absolute: participle + noun/pronoun in genitive, grammatically independent."
    ],
    vocab: [
      { greek: "ὁ/ἡ παιδεύων", english: "the one educating", category: "vocab" },
      { greek: "ὁ/ἡ παιδεύσας", english: "the one who educated", category: "vocab" },
      { greek: "εἶπον", english: "said (2nd aorist of λέγω)", category: "verb" },
      { greek: "ἦλθον", english: "came/went (2nd aorist of ἔρχομαι)", category: "verb" },
      { greek: "μετά + gen.", english: "with (together with)", category: "prep" },
      { greek: "μετά + acc.", english: "after", category: "prep" }
    ]
  },
  {
    id: 16,
    title: "More Participles",
    greekTitle: "Πλείονες Μετοχαί",
    summary: "Middle/passive participles. Perfect participles. εἰμί participle. Indirect statement with ὅτι.",
    grammar: [
      "Present middle/passive participle: -όμενος, -ομένη, -όμενον.",
      "Aorist middle participle: -σάμενος, -σαμένη, -σάμενον.",
      "Aorist passive participle: -θείς, -θεῖσα, -θέν (3rd declension).",
      "Perfect active participle: -κώς, -κυῖα, -κός.",
      "Perfect middle/passive participle: -μένος, -μένη, -μένον.",
      "Participle of εἰμί: ὤν, οὖσα, ὄν.",
      "Indirect statement with ὅτι/ὡς: verb of saying/knowing + ὅτι + finite clause (tense preserved)."
    ],
    vocab: [
      { greek: "αἰσθάνομαι", english: "perceive, notice (+gen./acc.)", category: "verb" },
      { greek: "ἀποθνῄσκω", english: "die", category: "verb" },
      { greek: "οἴομαι / οἶμαι", english: "think, suppose", category: "verb" },
      { greek: "ὁράω, εἶδον", english: "see; 2nd aor. saw", category: "verb" },
      { greek: "πολύς, πολλή, πολύ", english: "much; (pl.) many", category: "vocab" },
      { greek: "μέγας, μεγάλη, μέγα", english: "great, large", category: "vocab" }
    ]
  },
  {
    id: 17,
    title: "Interrogatives, Relatives, Indefinites",
    greekTitle: "Ἐρωτηματικαί",
    summary: "Interrogative pronouns/adjectives. Relative pronoun. Indefinite pronoun/adjective.",
    grammar: [
      "Interrogative pronoun: τίς, τί (who? what?) — always accented.",
      "Indefinite pronoun: τις, τι (someone, something, a certain) — enclitic, unaccented.",
      "Relative pronoun: ὅς, ἥ, ὅ — agrees with antecedent in gender and number; case from its own clause.",
      "Relative clause provides more information about antecedent.",
      "Indefinite relative: ὅστις, ἥτις, ὅτι (whoever, whatever)."
    ],
    vocab: [
      { greek: "τίς; τί;", english: "who? what? (interrogative)", category: "pronoun" },
      { greek: "τις, τι", english: "someone, something, a certain (indefinite)", category: "pronoun" },
      { greek: "ὅς, ἥ, ὅ", english: "who, which, that (relative)", category: "pronoun" },
      { greek: "ὅστις, ἥτις, ὅτι", english: "whoever, whatever", category: "pronoun" },
      { greek: "ἄλλος, -η, -ο", english: "other, another", category: "vocab" },
      { greek: "ἕκαστος, -η, -ον", english: "each, every", category: "vocab" },
      { greek: "διά + gen.", english: "through, by means of", category: "prep" },
      { greek: "διά + acc.", english: "on account of, because of", category: "prep" }
    ]
  },
  {
    id: 18,
    title: "Personal and Reflexive Pronouns",
    greekTitle: "Ἀντωνυμίαι",
    summary: "First, second, third person pronouns. Reflexive pronouns. αὐτός.",
    grammar: [
      "1st person: ἐγώ (nom.), ἐμοῦ/μου (gen.), ἐμοί/μοι (dat.), ἐμέ/με (acc.).",
      "2nd person: σύ (nom.), σοῦ/σου (gen.), σοί/σοι (dat.), σέ/σε (acc.).",
      "Unemphasized forms (μου, μοι, με, σου, σοι, σε) are enclitic.",
      "αὐτός, -ή, -ό: (1) intensive 'himself/herself'; (2) pronoun 'him/her/it'; (3) with article 'the same'.",
      "Reflexive pronouns: ἐμαυτόν (myself), σεαυτόν (yourself), ἑαυτόν (himself/herself/itself).",
      "Plural: ἡμεῖς (we), ὑμεῖς (you pl.)."
    ],
    vocab: [
      { greek: "ἐγώ", english: "I", category: "pronoun" },
      { greek: "σύ", english: "you (singular)", category: "pronoun" },
      { greek: "ἡμεῖς", english: "we", category: "pronoun" },
      { greek: "ὑμεῖς", english: "you (plural)", category: "pronoun" },
      { greek: "αὐτός, -ή, -ό", english: "he/she/it; self; same", category: "pronoun" },
      { greek: "ἐμαυτόν, -ήν", english: "myself", category: "pronoun" },
      { greek: "σεαυτόν, -ήν", english: "yourself", category: "pronoun" },
      { greek: "ἑαυτόν, -ήν, -ό", english: "himself/herself/itself", category: "pronoun" }
    ]
  },
  {
    id: 19,
    title: "Demonstrative Pronouns",
    greekTitle: "Δεικτικαί",
    summary: "Demonstratives: οὗτος, ἐκεῖνος, ὅδε. Near and far deixis.",
    grammar: [
      "οὗτος, αὕτη, τοῦτο: this, these (near speaker). Notice τ- + diphthong forms.",
      "ἐκεῖνος, ἐκείνη, ἐκεῖνο: that, those (far from speaker).",
      "ὅδε, ἥδε, τόδε: this here (calling attention to something), often 'the following'.",
      "Demonstratives in predicate position with article-noun phrase.",
      "οὗτος ὁ ἄνθρωπος / ὁ ἄνθρωπος οὗτος = 'this person'."
    ],
    vocab: [
      { greek: "οὗτος, αὕτη, τοῦτο", english: "this, these", category: "pronoun" },
      { greek: "ἐκεῖνος, -η, -ο", english: "that, those (over there)", category: "pronoun" },
      { greek: "ὅδε, ἥδε, τόδε", english: "this (here), the following", category: "pronoun" },
      { greek: "ὁ αὐτός, ἡ αὐτή, τὸ αὐτό", english: "the same", category: "pronoun" },
      { greek: "πρός + gen.", english: "from the side of, in the name of", category: "prep" },
      { greek: "πρός + dat.", english: "near, in addition to", category: "prep" },
      { greek: "πρός + acc.", english: "toward, against, in relation to", category: "prep" }
    ]
  },
  {
    id: 20,
    title: "Numerals and Time Expressions",
    greekTitle: "Ἀριθμοί",
    summary: "Cardinal numbers 1-10 and beyond. Ordinal numbers. Time constructions.",
    grammar: [
      "Cardinal: εἷς, μία, ἕν (one); δύο (two); τρεῖς/τρία (three); τέσσαρες/τέσσαρα (four).",
      "πέντε (5), ἕξ (6), ἑπτά (7), ὀκτώ (8), ἐννέα (9), δέκα (10).",
      "Ordinals: πρῶτος (1st), δεύτερος (2nd), τρίτος (3rd), τέταρτος (4th), πέμπτος (5th).",
      "Time when (point in time): dative case. Time within which: genitive. Duration of time: accusative.",
      "ἐν + dat. = in (time or place)."
    ],
    vocab: [
      { greek: "εἷς, μία, ἕν", english: "one", category: "vocab" },
      { greek: "δύο", english: "two", category: "vocab" },
      { greek: "τρεῖς, τρία", english: "three", category: "vocab" },
      { greek: "τέσσαρες, -α", english: "four", category: "vocab" },
      { greek: "πέντε", english: "five", category: "vocab" },
      { greek: "δέκα", english: "ten", category: "vocab" },
      { greek: "πρῶτος, -η, -ον", english: "first", category: "vocab" },
      { greek: "ἐν + dat.", english: "in, among, on (place or time)", category: "prep" },
      { greek: "ἐκ/ἐξ + gen.", english: "out of, from", category: "prep" }
    ]
  },
  {
    id: 21,
    title: "Adjective Degrees",
    greekTitle: "Ἐπίθετα",
    summary: "Comparative and superlative adjectives. -τερος/-τατος; irregular comparisons.",
    grammar: [
      "Comparative suffix: -τερος, -τέρα, -τερον (2nd/1st declension).",
      "Superlative suffix: -τατος, -τάτη, -τατον.",
      "Comparatives with -ων/-ον (3rd declension): e.g., μείζων (greater), βελτίων (better).",
      "Irregular: ἀγαθός→ἀμείνων/κρείττων→ἄριστος/κράτιστος; κακός→κακίων/χείρων→κάκιστος/χείριστος.",
      "Comparison with genitive: 'X is greater than Y' = X μείζων ἐστὶ Y (gen.).",
      "Comparison with ἤ ('than'): followed by same case as first item."
    ],
    vocab: [
      { greek: "ἀγαθός, ἀμείνων, ἄριστος", english: "good, better, best", category: "vocab" },
      { greek: "κακός, κακίων, κάκιστος", english: "bad, worse, worst", category: "vocab" },
      { greek: "καλός, καλλίων, κάλλιστος", english: "beautiful, more beautiful, most beautiful", category: "vocab" },
      { greek: "μέγας, μείζων, μέγιστος", english: "great, greater, greatest", category: "vocab" },
      { greek: "μικρός, μικρότερος, μικρότατος", english: "small, smaller, smallest", category: "vocab" },
      { greek: "πολύς, πλείων, πλεῖστος", english: "much/many, more, most", category: "vocab" },
      { greek: "ἤ", english: "than; or", category: "particle" }
    ]
  },
  {
    id: 22,
    title: "Subjunctive Mood",
    greekTitle: "Ὑποτακτική",
    summary: "Present and aorist subjunctive. Purpose clauses. Conditional sentences type 3.",
    grammar: [
      "Subjunctive mood: expresses possibility, purpose, indefinite conditions, exhortations.",
      "Present subjunctive uses lengthened thematic vowel: -ω, -ῃς, -ῃ, -ωμεν, -ητε, -ωσι(ν).",
      "Aorist subjunctive adds -σ- and uses same endings.",
      "Purpose clauses: ἵνα/ὡς/ὅπως + subjunctive (primary sequence); optative (secondary).",
      "Present general conditions: εἰ + ἄν + subjunctive in protasis, present in apodosis (ἐάν = εἰ + ἄν).",
      "Exhortation (hortatory subjunctive): 1st person plural: παιδεύωμεν! = 'Let us educate!'"
    ],
    vocab: [
      { greek: "ἵνα", english: "in order that, so that (+ subj./opt.)", category: "particle" },
      { greek: "ὅπως", english: "in order that; how (+ subj./opt./fut.)", category: "particle" },
      { greek: "ἐάν (εἰ + ἄν)", english: "if (with subjunctive)", category: "particle" },
      { greek: "ἄν", english: "modal particle (with subj./opt./indic.)", category: "particle" },
      { greek: "ἕως", english: "until, as long as, while", category: "particle" },
      { greek: "πρίν", english: "before (+ inf. or subj.)", category: "particle" }
    ]
  },
  {
    id: 23,
    title: "Optative Mood",
    greekTitle: "Εὐκτική",
    summary: "Present and aorist optative. Wishes. Indirect statement. Secondary conditions.",
    grammar: [
      "Optative mood: expresses wishes, potential statements, conditions in secondary sequence.",
      "Present optative endings: -οιμι, -οις, -οι, -οιμεν, -οιτε, -οιεν.",
      "Aorist optative adds -σ-: -σαιμι, -σαις, -σαι, -σαιμεν, -σαιτε, -σαιεν.",
      "Wishes: εἴθε/εἰ γάρ + optative (achievable wish); + indicative (unachievable wish).",
      "Potential optative: ἄν + optative = 'would, could, might'.",
      "Future-less-vivid condition: εἰ + optative → ἄν + optative."
    ],
    vocab: [
      { greek: "εἴθε", english: "would that! if only! (introduces wish)", category: "particle" },
      { greek: "εἰ γάρ", english: "would that! if only! (introduces wish)", category: "particle" },
      { greek: "εἴ", english: "if (introduces conditions)", category: "particle" },
      { greek: "εἰ μή", english: "if not, unless", category: "particle" },
      { greek: "ἤδη", english: "already, by now", category: "particle" }
    ]
  },
  {
    id: 24,
    title: "Imperative Mood",
    greekTitle: "Προστακτική",
    summary: "Present and aorist imperative. Prohibition with μή. Commands and prohibitions.",
    grammar: [
      "Present imperative active: -ε, -ετω, -ετε, -οντων (2nd sg., 3rd sg., 2nd pl., 3rd pl.).",
      "Aorist imperative active: -σον, -σάτω, -σατε, -σάντων.",
      "Middle imperatives: present -ου, -έσθω, -εσθε, -έσθων.",
      "Second aorist imperative: special forms (λιπέ, λιπέτω, λίπετε).",
      "Prohibition: μή + present imperative (stop doing) OR μή + aorist subjunctive (don't start).",
      "Immediate commands (more urgent): aorist imperative."
    ],
    vocab: [
      { greek: "ἄκουε", english: "listen! hear! (imperative)", category: "verb" },
      { greek: "λέγε", english: "speak! say! (imperative)", category: "verb" },
      { greek: "φέρε", english: "come! (imperative of φέρω, used as 'come on!')", category: "verb" },
      { greek: "ἴθι", english: "go! (imperative of εἶμι)", category: "verb" },
      { greek: "ἐπί + gen.", english: "on, upon; in the time of", category: "prep" },
      { greek: "ἐπί + dat.", english: "on, at; for the purpose of", category: "prep" },
      { greek: "ἐπί + acc.", english: "onto, against, toward", category: "prep" }
    ]
  },
  {
    id: 25,
    title: "Contract Verbs",
    greekTitle: "Συναιρετικὰ Ῥήματα",
    summary: "α-contract, ε-contract, ο-contract verbs. Contraction rules.",
    grammar: [
      "Contract verbs: stems ending in -α, -ε, -ο combine with endings.",
      "ε-contracts: ε+ε→ει, ε+ο→ου, ε+ει→ει, ε+ου→ου, ε+long vowel→long vowel wins.",
      "α-contracts: α+ε→α, α+ει→ᾳ, α+ο→ω, α+ου→ω, α+long vowel→long vowel.",
      "ο-contracts: ο+ε/ο→ου, ο+ει→οι, ο+long vowel→ω.",
      "Infinitives: ε-: -εῖν; α-: -ᾶν; ο-: -οῦν.",
      "Uncontracted forms appear in dialects and poetry (Homeric Greek)."
    ],
    vocab: [
      { greek: "ἀγαπάω", english: "love, be fond of", category: "verb" },
      { greek: "νικάω", english: "conquer, win", category: "verb" },
      { greek: "ὁράω", english: "see, look at", category: "verb" },
      { greek: "ποιέω", english: "make, do", category: "verb" },
      { greek: "φιλέω", english: "love, like, be fond of", category: "verb" },
      { greek: "ἀξιόω", english: "think worthy, demand", category: "verb" },
      { greek: "δηλόω", english: "make clear, show", category: "verb" },
      { greek: "πληρόω", english: "fill, fulfill", category: "verb" }
    ]
  },
  {
    id: 26,
    title: "μι-Verbs",
    greekTitle: "Ῥήματα σε -μι",
    summary: "Athematic verbs: δίδωμι, τίθημι, ἵημι, ἵστημι. Their forms and peculiarities.",
    grammar: [
      "μι-verbs: no thematic vowel, stem directly + personal endings.",
      "δίδωμι (give): δίδωμι, δίδως, δίδωσι, δίδομεν, δίδοτε, διδόασι.",
      "τίθημι (put, place): τίθημι, τίθης, τίθησι, τίθεμεν, τίθετε, τιθέασι.",
      "ἵστημι (make stand; intrans. stand): ἵστημι, ἵστης, ἵστησι...",
      "Aorists: ἔδωκα, ἔθηκα; 2nd aorist ἔστην (intrans.) / ἔστησα (trans.).",
      "δεῖ (it is necessary), χρή (it is necessary/fitting): impersonal + inf."
    ],
    vocab: [
      { greek: "δίδωμι", english: "give", category: "verb" },
      { greek: "τίθημι", english: "put, place, set", category: "verb" },
      { greek: "ἵστημι", english: "make stand (trans.); stand (intrans.)", category: "verb" },
      { greek: "ἵημι", english: "send, let go, throw", category: "verb" },
      { greek: "δεῖ", english: "it is necessary (+ acc. + inf.)", category: "verb" },
      { greek: "χρή", english: "it is necessary, fitting (+ inf.)", category: "verb" },
      { greek: "ἔξεστι(ν)", english: "it is possible (+ dat. + inf.)", category: "verb" }
    ]
  },
  {
    id: 27,
    title: "Indirect Discourse",
    greekTitle: "Πλάγιος Λόγος",
    summary: "Indirect statement with infinitive after verbs of believing, thinking; with ὅτι; with participle.",
    grammar: [
      "Three types of indirect discourse in Greek:",
      "1. ὅτι/ὡς + finite verb: tense preserved in primary sequence; optative possible in secondary.",
      "2. Infinitive (after verbs of belief): subject in accusative, negation οὐ; tense from direct statement.",
      "3. Participle (after verbs of knowing, seeing, showing): subject in accusative or genitive.",
      "Verbs of thinking (νομίζω, οἴομαι) → infinitive construction.",
      "Verbs of knowing/seeing (οἶδα, ὁράω, γιγνώσκω) → participle construction."
    ],
    vocab: [
      { greek: "οἶδα", english: "know (perfect form, present meaning)", category: "verb" },
      { greek: "φημί", english: "say, claim (irregular μι-verb)", category: "verb" },
      { greek: "ἀγγέλλω", english: "announce, report", category: "verb" },
      { greek: "ἐρωτάω", english: "ask, question", category: "verb" },
      { greek: "ἀποκρίνομαι", english: "answer, reply", category: "verb" }
    ]
  },
  {
    id: 28,
    title: "Conditions",
    greekTitle: "Ὑποθετικαί",
    summary: "All four conditional types: simple, contrary-to-fact, future more vivid, future less vivid.",
    grammar: [
      "1. Simple (general) past: εἰ + indicative → indicative (fact or assumption).",
      "2. Contrary-to-fact: εἰ + imperfect/aorist indicative → ἄν + imperfect/aorist indicative.",
      "   Past CtoF: εἰ + aorist indicative → ἄν + aorist indicative.",
      "   Present CtoF: εἰ + imperfect → ἄν + imperfect.",
      "3. Future more vivid: ἐάν + subjunctive → future indicative.",
      "4. Future less vivid (should-would): εἰ + optative → ἄν + optative."
    ],
    vocab: [
      { greek: "εἰ + indicative", english: "if (simple condition, past/present fact)", category: "particle" },
      { greek: "εἰ + optative", english: "if (future less vivid, 'should')", category: "particle" },
      { greek: "ἐάν + subjunctive", english: "if (future more vivid)", category: "particle" },
      { greek: "εἰ + imperfect", english: "if (contrary-to-fact, present)", category: "particle" },
      { greek: "εἰ + aorist ind.", english: "if (contrary-to-fact, past)", category: "particle" }
    ]
  },
  {
    id: 29,
    title: "Verbal Adjectives. Numerals.",
    greekTitle: "Ῥηματικά Ἐπίθετα",
    summary: "Verbal adjectives in -τέος/-τέον (obligation). Verbal adjectives in -τός. Higher numerals.",
    grammar: [
      "Verbal adj. in -τέος: παιδευτέος = 'needing to be educated'. Expresses necessity.",
      "Personal construction: dative of agent + verbal adj. agreeing with subject.",
      "Impersonal construction: neuter sg. verbal adj. + dative of agent (παιδευτέον ἐστίν ἡμῖν).",
      "Verbal adj. in -τός: expresses possibility or capability (παιδευτός = capable of being educated).",
      "Higher numerals: ἑκατόν (100), χίλιοι (1000), μύριοι (10,000)."
    ],
    vocab: [
      { greek: "ποιητέος, -α, -ον", english: "needing to be done, that must be done", category: "vocab" },
      { greek: "λεκτέος, -α, -ον", english: "that must be said", category: "vocab" },
      { greek: "ἑκατόν", english: "one hundred", category: "vocab" },
      { greek: "χίλιοι, -αι, -α", english: "one thousand", category: "vocab" },
      { greek: "μύριοι, -αι, -α", english: "ten thousand; countless", category: "vocab" },
      { greek: "παρά + gen.", english: "from (alongside), from beside", category: "prep" },
      { greek: "παρά + dat.", english: "beside, with, at the house of", category: "prep" },
      { greek: "παρά + acc.", english: "to, alongside, past; contrary to", category: "prep" }
    ]
  },
  {
    id: 30,
    title: "Key Prepositions Review",
    greekTitle: "Προθέσεις",
    summary: "Comprehensive review of all major prepositions with cases and meanings.",
    grammar: [
      "ἀπό + gen. = away from, from; ἀντί + gen. = instead of, opposite.",
      "εἰς / ἐς + acc. = into, to, toward (motion).",
      "ἐκ/ἐξ + gen. = out of, from; ἐν + dat. = in, on, among.",
      "ἐπί: gen. = on, in time of; dat. = on, at, for purpose; acc. = onto, against.",
      "κατά: gen. = down, against; acc. = according to, throughout.",
      "μετά: gen. = with (together); acc. = after.",
      "παρά: gen. = from; dat. = beside; acc. = to, past, contrary to.",
      "περί: gen. = about, concerning; acc. = around.",
      "πρός: gen. = from the side of; dat. = near; acc. = toward, against.",
      "σύν + dat. = with, together with.",
      "ὑπό: gen. = by (agent), under; acc. = under (motion), around."
    ],
    vocab: [
      { greek: "ἀπό + gen.", english: "away from, from", category: "prep" },
      { greek: "εἰς/ἐς + acc.", english: "into, to, toward", category: "prep" },
      { greek: "ἐκ/ἐξ + gen.", english: "out of, from", category: "prep" },
      { greek: "ἐν + dat.", english: "in, on, among", category: "prep" },
      { greek: "κατά + gen.", english: "down from, against", category: "prep" },
      { greek: "κατά + acc.", english: "according to, throughout, by", category: "prep" },
      { greek: "περί + gen.", english: "about, concerning", category: "prep" },
      { greek: "περί + acc.", english: "around, about", category: "prep" },
      { greek: "σύν + dat.", english: "with, together with", category: "prep" },
      { greek: "ἀντί + gen.", english: "instead of, opposite, against", category: "prep" }
    ]
  }
];

// ── ALPHABET DATA ──
const ALPHABET = [
  { upper: "Α", lower: "α", name: "Alpha", translit: "a", sound: "as in 'father' (long) or 'above' (short)", examples: "ἄνθρωπος (man), ἀγαθός (good)" },
  { upper: "Β", lower: "β", name: "Beta", translit: "b", sound: "as in 'big'", examples: "βαίνω (go), βίος (life)" },
  { upper: "Γ", lower: "γ", name: "Gamma", translit: "g", sound: "as in 'go'; before γ,κ,χ,ξ = 'ng'", examples: "γράφω (write), γλῶσσα (tongue)" },
  { upper: "Δ", lower: "δ", name: "Delta", translit: "d", sound: "as in 'dog'", examples: "δῶρον (gift), δίκη (justice)" },
  { upper: "Ε", lower: "ε", name: "Epsilon", translit: "e", sound: "short 'e' as in 'pet'", examples: "ἐν (in), ἐλπίς (hope)" },
  { upper: "Ζ", lower: "ζ", name: "Zeta", translit: "z", sound: "as 'zd' or 'dz'", examples: "ζῳόν (animal), ζωή (life)" },
  { upper: "Η", lower: "η", name: "Eta", translit: "ē", sound: "long 'e' as in 'they'", examples: "ἡμέρα (day), ἥλιος (sun)" },
  { upper: "Θ", lower: "θ", name: "Theta", translit: "th", sound: "aspirated 't', like 'top-hat'", examples: "θεός (god), θάλαττα (sea)" },
  { upper: "Ι", lower: "ι", name: "Iota", translit: "i", sound: "short 'i' as in 'pit', or long as in 'machine'", examples: "ἵππος (horse), ἰατρός (doctor)" },
  { upper: "Κ", lower: "κ", name: "Kappa", translit: "k", sound: "as in 'kin'", examples: "κακός (bad), καλός (beautiful)" },
  { upper: "Λ", lower: "λ", name: "Lambda", translit: "l", sound: "as in 'lemon'", examples: "λόγος (word), λύω (free)" },
  { upper: "Μ", lower: "μ", name: "Mu", translit: "m", sound: "as in 'man'", examples: "μήτηρ (mother), μικρός (small)" },
  { upper: "Ν", lower: "ν", name: "Nu", translit: "n", sound: "as in 'now'", examples: "νόμος (law), νέος (new)" },
  { upper: "Ξ", lower: "ξ", name: "Xi", translit: "x", sound: "as in 'axe'", examples: "ξένος (stranger/guest), ξίφος (sword)" },
  { upper: "Ο", lower: "ο", name: "Omicron", translit: "o", sound: "short 'o' as in 'not'", examples: "ὁδός (road), ὄνομα (name)" },
  { upper: "Π", lower: "π", name: "Pi", translit: "p", sound: "as in 'pen'", examples: "πόλις (city), παιδεύω (educate)" },
  { upper: "Ρ", lower: "ρ", name: "Rho", translit: "r", sound: "trilled 'r'; initial ρ takes rough breathing (ῥ)", examples: "ῥήτωρ (speaker), ῥῆμα (word/verb)" },
  { upper: "Σ", lower: "σ/ς", name: "Sigma", translit: "s", sound: "as in 'sun' (ς at word end)", examples: "σοφία (wisdom), σῶμα (body)" },
  { upper: "Τ", lower: "τ", name: "Tau", translit: "t", sound: "as in 'top'", examples: "τιμή (honor), τέχνη (art/skill)" },
  { upper: "Υ", lower: "υ", name: "Upsilon", translit: "u/y", sound: "French 'u' or German 'ü'", examples: "ὑπό (under), ψυχή (soul)" },
  { upper: "Φ", lower: "φ", name: "Phi", translit: "ph", sound: "aspirated 'p', like 'p' + 'h'", examples: "φιλέω (love), φύσις (nature)" },
  { upper: "Χ", lower: "χ", name: "Chi", translit: "ch", sound: "aspirated 'k', like Scottish 'loch'", examples: "χώρα (land), χρόνος (time)" },
  { upper: "Ψ", lower: "ψ", name: "Psi", translit: "ps", sound: "as in 'lips'", examples: "ψυχή (soul), ψῆφος (vote/pebble)" },
  { upper: "Ω", lower: "ω", name: "Omega", translit: "ō", sound: "long 'o' as in 'bone'", examples: "ὥρα (hour/season), ὠφέλεια (benefit)" }
];

const DIACRITICS = [
  { mark: "ά", name: "Acute Accent", description: "Rising tone. Can appear on last three syllables (ultima, penult, antepenult)." },
  { mark: "ὰ", name: "Grave Accent", description: "Replaces acute on ultima when another word follows in the same sentence." },
  { mark: "ᾶ", name: "Circumflex Accent", description: "Rising-falling tone. Only on long syllables; only on ultima or penult." },
  { mark: "ἀ", name: "Smooth Breathing", description: "No aspiration. Every initial vowel has a breathing mark." },
  { mark: "ἁ", name: "Rough Breathing", description: "Adds /h/ sound before the vowel. Initial ρ always takes rough breathing." },
  { mark: "ᾳ", name: "Iota Subscript", description: "Written under α, η, or ω (ᾳ, ῃ, ῳ). Represents old long diphthong; historically pronounced." },
  { mark: "ϊ", name: "Diaeresis", description: "Two dots over ι or υ show they are pronounced separately, not as a diphthong." }
];

// ── KEY PARADIGMS ──
const PARADIGMS = {
  second_decl_masc: {
    title: "2nd Declension Masculine (ὁ λόγος)",
    headers: ["Case", "Singular", "Plural"],
    rows: [
      ["Nominative", "λόγ-ος", "λόγ-οι"],
      ["Genitive", "λόγ-ου", "λόγ-ων"],
      ["Dative", "λόγ-ῳ", "λόγ-οις"],
      ["Accusative", "λόγ-ον", "λόγ-ους"],
      ["Vocative", "λόγ-ε", "λόγ-οι"]
    ]
  },
  second_decl_neut: {
    title: "2nd Declension Neuter (τὸ δῶρον)",
    headers: ["Case", "Singular", "Plural"],
    rows: [
      ["Nominative", "δῶρ-ον", "δῶρ-α"],
      ["Genitive", "δώρ-ου", "δώρ-ων"],
      ["Dative", "δώρ-ῳ", "δώρ-οις"],
      ["Accusative", "δῶρ-ον", "δῶρ-α"],
      ["Vocative", "δῶρ-ον", "δῶρ-α"]
    ]
  },
  first_decl_fem_eta: {
    title: "1st Declension Fem. η-type (ἡ ἀρχή)",
    headers: ["Case", "Singular", "Plural"],
    rows: [
      ["Nominative", "ἀρχ-ή", "ἀρχ-αί"],
      ["Genitive", "ἀρχ-ῆς", "ἀρχ-ῶν"],
      ["Dative", "ἀρχ-ῇ", "ἀρχ-αῖς"],
      ["Accusative", "ἀρχ-ήν", "ἀρχ-άς"],
      ["Vocative", "ἀρχ-ή", "ἀρχ-αί"]
    ]
  },
  first_decl_fem_alpha: {
    title: "1st Declension Fem. α-type (ἡ χώρα, after ε/ι/ρ)",
    headers: ["Case", "Singular", "Plural"],
    rows: [
      ["Nominative", "χώρ-α", "χῶρ-αι"],
      ["Genitive", "χώρ-ας", "χωρ-ῶν"],
      ["Dative", "χώρ-ᾳ", "χώρ-αις"],
      ["Accusative", "χώρ-αν", "χώρ-ας"],
      ["Vocative", "χώρ-α", "χῶρ-αι"]
    ]
  },
  first_decl_masc: {
    title: "1st Declension Masc. (ὁ νεανίας)",
    headers: ["Case", "Singular", "Plural"],
    rows: [
      ["Nominative", "νεανί-ας", "νεανί-αι"],
      ["Genitive", "νεανί-ου", "νεανι-ῶν"],
      ["Dative", "νεανί-ᾳ", "νεανί-αις"],
      ["Accusative", "νεανί-αν", "νεανί-ας"],
      ["Vocative", "νεανί-α", "νεανί-αι"]
    ]
  },
  article: {
    title: "Definite Article (ὁ, ἡ, τό)",
    headers: ["Case", "Masc. Sg./Pl.", "Fem. Sg./Pl.", "Neut. Sg./Pl."],
    rows: [
      ["Nominative", "ὁ / οἱ", "ἡ / αἱ", "τό / τά"],
      ["Genitive", "τοῦ / τῶν", "τῆς / τῶν", "τοῦ / τῶν"],
      ["Dative", "τῷ / τοῖς", "τῇ / ταῖς", "τῷ / τοῖς"],
      ["Accusative", "τόν / τούς", "τήν / τάς", "τό / τά"]
    ]
  },
  third_decl_cons: {
    title: "3rd Declension Consonant Stem (ὁ ἄρχων)",
    headers: ["Case", "Singular", "Plural"],
    rows: [
      ["Nominative", "ἄρχ-ων", "ἄρχ-οντες"],
      ["Genitive", "ἄρχ-οντος", "ἀρχ-όντων"],
      ["Dative", "ἄρχ-οντι", "ἄρχ-ουσι(ν)"],
      ["Accusative", "ἄρχ-οντα", "ἄρχ-οντας"],
      ["Vocative", "ἄρχ-ον", "ἄρχ-οντες"]
    ]
  },
  present_active_ind: {
    title: "Present Active Indicative (παιδεύω)",
    headers: ["Person", "Singular", "Plural"],
    rows: [
      ["1st", "παιδεύ-ω", "παιδεύ-ομεν"],
      ["2nd", "παιδεύ-εις", "παιδεύ-ετε"],
      ["3rd", "παιδεύ-ει", "παιδεύ-ουσι(ν)"]
    ]
  },
  present_mid_pass_ind: {
    title: "Present Middle/Passive Indicative (παιδεύομαι)",
    headers: ["Person", "Singular", "Plural"],
    rows: [
      ["1st", "παιδεύ-ομαι", "παιδευ-όμεθα"],
      ["2nd", "παιδεύ-ει/ῃ", "παιδεύ-εσθε"],
      ["3rd", "παιδεύ-εται", "παιδεύ-ονται"]
    ]
  },
  imperfect_active: {
    title: "Imperfect Active Indicative (ἐπαίδευον)",
    headers: ["Person", "Singular", "Plural"],
    rows: [
      ["1st", "ἐπαίδευ-ον", "ἐπαιδεύ-ομεν"],
      ["2nd", "ἐπαίδευ-ες", "ἐπαιδεύ-ετε"],
      ["3rd", "ἐπαίδευ-ε(ν)", "ἐπαίδευ-ον"]
    ]
  },
  aorist_active: {
    title: "1st Aorist Active Indicative (ἐπαίδευσα)",
    headers: ["Person", "Singular", "Plural"],
    rows: [
      ["1st", "ἐπαίδευσ-α", "ἐπαιδεύσ-αμεν"],
      ["2nd", "ἐπαίδευσ-ας", "ἐπαιδεύσ-ατε"],
      ["3rd", "ἐπαίδευσ-ε(ν)", "ἐπαίδευσ-αν"]
    ]
  },
  perfect_active: {
    title: "Perfect Active Indicative (πεπαίδευκα)",
    headers: ["Person", "Singular", "Plural"],
    rows: [
      ["1st", "πεπαίδευκ-α", "πεπαιδεύκ-αμεν"],
      ["2nd", "πεπαίδευκ-ας", "πεπαιδεύκ-ατε"],
      ["3rd", "πεπαίδευκ-ε(ν)", "πεπαιδεύκ-ασι(ν)"]
    ]
  },
  eimi: {
    title: "εἰμί (to be) — All Tenses",
    headers: ["Tense", "1sg", "2sg", "3sg", "1pl", "2pl", "3pl"],
    rows: [
      ["Present", "εἰμί", "εἶ", "ἐστί(ν)", "ἐσμέν", "ἐστέ", "εἰσί(ν)"],
      ["Imperfect", "ἦν", "ἦσθα", "ἦν", "ἦμεν", "ἦτε", "ἦσαν"],
      ["Future", "ἔσομαι", "ἔσει/ῃ", "ἔσται", "ἐσόμεθα", "ἔσεσθε", "ἔσονται"],
      ["Subj.", "ὦ", "ᾖς", "ᾖ", "ὦμεν", "ἦτε", "ὦσι(ν)"],
      ["Opt.", "εἴην", "εἴης", "εἴη", "εἴημεν", "εἴητε", "εἴησαν"],
      ["Imp.", "—", "ἴσθι", "ἔστω", "—", "ἔστε", "ἔστων"]
    ]
  }
};

// ── PREPOSITIONS REFERENCE ──
const PREPOSITIONS = [
  { greek: "ἀπό (ἀφ', ἀπ')", english: "away from, from, of", cases: "Genitive only" },
  { greek: "ἀντί", english: "instead of, opposite, against, in return for", cases: "Genitive only" },
  { greek: "εἰς / ἐς", english: "into, to, toward; for the purpose of", cases: "Accusative only" },
  { greek: "ἐκ / ἐξ", english: "out of, from, off; as a result of", cases: "Genitive only" },
  { greek: "ἐν", english: "in, on, among; in the case of", cases: "Dative only" },
  { greek: "ἐπί", english: "on, upon (gen.); at, for (dat.); onto, against (acc.)", cases: "Gen./Dat./Acc." },
  { greek: "κατά", english: "down from, against (gen.); according to, throughout (acc.)", cases: "Gen./Acc." },
  { greek: "μετά", english: "with, among (gen.); after (acc.)", cases: "Gen./Acc." },
  { greek: "παρά", english: "from beside (gen.); beside, with, at (dat.); to, past, contrary (acc.)", cases: "Gen./Dat./Acc." },
  { greek: "περί", english: "about, concerning (gen.); around, about (acc.)", cases: "Gen./Acc." },
  { greek: "πρός", english: "from, in name of (gen.); near, in addition (dat.); toward, against, regarding (acc.)", cases: "Gen./Dat./Acc." },
  { greek: "σύν", english: "with, together with, by means of", cases: "Dative only" },
  { greek: "ὑπό (ὑφ', ὑπ')", english: "by (agent), under (gen.); under, at (dat.); under, around (acc.)", cases: "Gen./Dat./Acc." },
  { greek: "ἀμφί", english: "around, about, concerning", cases: "Gen./Dat./Acc." },
  { greek: "ἀνά", english: "up along, throughout; at the rate of", cases: "Acc. (also Dat. in poetry)" },
  { greek: "διά", english: "through, by means of (gen.); on account of, because of (acc.)", cases: "Gen./Acc." }
];

// ── PARTICLES & CONJUNCTIONS ──
const PARTICLES = [
  { greek: "καί", english: "and, also, even, too" },
  { greek: "τέ (τε...καί)", english: "and, both...and (postpositive)" },
  { greek: "ἤ", english: "or; than (in comparisons)" },
  { greek: "ἀλλά", english: "but (strong contrast), yet, however" },
  { greek: "δέ", english: "but, and, on the other hand (postpositive; mild contrast)" },
  { greek: "μέν...δέ", english: "on the one hand...on the other hand" },
  { greek: "γάρ", english: "for, since (postpositive; gives reason)" },
  { greek: "οὖν", english: "therefore, then, so (postpositive; draws conclusion)" },
  { greek: "ἄρα", english: "then, therefore, so (inferential; often rhetorical)" },
  { greek: "οὐ / οὐκ / οὐχ", english: "not (with indicative; before smooth/rough breathing)" },
  { greek: "μή", english: "not (with other moods; also introduces fears, prohibitions)" },
  { greek: "οὔτε / μήτε", english: "nor, and not (οὔτε...οὔτε = neither...nor)" },
  { greek: "ὅτι", english: "that; because (introduces indirect statement or reason)" },
  { greek: "ὡς", english: "as, how, that; when (introduces indirect statement, comparisons, purpose)" },
  { greek: "ἵνα", english: "in order that, so that (purpose + subjunctive/optative)" },
  { greek: "ὅπως", english: "in order that, how (purpose/indirect command)" },
  { greek: "εἰ", english: "if (introduces conditions)" },
  { greek: "ἐάν / ἄν", english: "if (εἰ + ἄν with subjunctive = future more vivid)" },
  { greek: "εἴτε...εἴτε", english: "whether...or" },
  { greek: "ἐπεί / ἐπειδή", english: "when, since, after (temporal/causal)" },
  { greek: "ὅτε", english: "when (at the time when)" },
  { greek: "πρίν", english: "before, until (+inf. or +subj.)" },
  { greek: "ἕως", english: "until, as long as, while" },
  { greek: "εἴθε / εἰ γάρ", english: "would that! if only! (introduces wishes with optative)" },
  { greek: "ναί", english: "yes (rarely used; agreement often shown by repetition)" },
  { greek: "οὐ μή", english: "emphatic future denial: 'certainly not!'" },
  { greek: "μέντοι", english: "however, nevertheless, indeed (postpositive)" },
  { greek: "τοιγαροῦν", english: "therefore, for that reason" },
  { greek: "ἄρα", english: "so, therefore, then (draws inference)" },
  { greek: "ἆρα", english: "introduces yes/no questions (ἆρα οὐ = surely?, ἆρα μή = surely not?)" }
];
