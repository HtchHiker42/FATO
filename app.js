/* ============================================================
   FATO Greek Study Companion — Application Logic
   ============================================================ */

'use strict';

// ── DATA ──────────────────────────────────────────────────────

const VOCAB = [
  // Lesson 20
  { greek:'ζητέω', forms:'ζητήσω, ἐζήτησα, ἐζήτηκα', pos:'verb', eng:'seek, search for, investigate; seek (to) + inf.', lesson:20, note:'Contracted fut./perf.' },
  { greek:'ῥίπτω', forms:'ῥίψω, ἔρριψα, ἔρριφα', pos:'verb', eng:'throw, hurl, cast aside', lesson:20, note:'' },
  { greek:'γῆ', forms:'γῆς, ἡ', pos:'noun', eng:'earth, ground, land; Γῆ = Earth (personified)', lesson:20, note:'cf. geography, geodesic' },
  { greek:'δένδρον', forms:'-ου, τό', pos:'noun', eng:'tree', lesson:20, note:'cf. dendrite, philodendron' },
  { greek:'Ἑλλάς', forms:'-άδος, ἡ', pos:'noun', eng:'Hellas, Greece', lesson:20, note:'' },
  { greek:'Ἕλλην', forms:'-ηνος, ὁ/ἡ', pos:'noun', eng:'a Hellene, a Greek', lesson:20, note:'' },
  { greek:'οὐρανός', forms:'-οῦ, ὁ', pos:'noun', eng:'sky, heaven; Οὐρανός = Sky (personified)', lesson:20, note:'cf. uranic, Uranus' },
  { greek:'Ἑλληνικός', forms:'-ή, -όν', pos:'adj', eng:'Hellenic, Greek', lesson:20, note:'' },
  { greek:'κατά', forms:'', pos:'prep', eng:'(+ gen.) down from, against; (+ acc.) down, according to, by', lesson:20, note:'κατ᾽ / καθ᾽; cf. cataclysm' },
  // Lesson 21
  { greek:'ἀποθνῄσκω', forms:'ἀποθανοῦμαι, ἀπέθανον, τέθνηκα', pos:'verb', eng:'die, be killed', lesson:21, note:'Fut. contracted; always active form' },
  { greek:'ἀποκτείνω', forms:'ἀποκτενῶ, ἀπέκτεινα, ἀπέκτονα', pos:'verb', eng:'kill', lesson:21, note:'Invariably active in form and meaning' },
  { greek:'φοβέω', forms:'φοβήσω, ἐφόβησα, πεφόβηκα', pos:'verb', eng:'(act.) frighten; (mid./pass.) be afraid of, fear', lesson:21, note:'' },
  { greek:'φόβος', forms:'-ου, ὁ', pos:'noun', eng:'fear, fright', lesson:21, note:'cf. agoraphobia' },
  { greek:'τίς, τί', forms:'', pos:'pron', eng:'(interrog. adj.) what? which? (interrog. pron.) who? what?', lesson:21, note:'Accent stays acute always' },
  { greek:'τις, τι', forms:'enclitic', pos:'pron', eng:'(indef. adj.) a, an, some, any; (indef. pron.) someone, something', lesson:21, note:'Enclitic; postpositive' },
  { greek:'ἐμός', forms:'-ή, -όν', pos:'adj', eng:'my, mine, my own', lesson:21, note:'Possessive adjective' },
  { greek:'ἡμέτερος', forms:'-α, -ον', pos:'adj', eng:'our, ours, our own', lesson:21, note:'Possessive adjective' },
  { greek:'σός', forms:'σή, σόν', pos:'adj', eng:'your (sg.), yours, your own', lesson:21, note:'Possessive adjective' },
  { greek:'ὑμέτερος', forms:'-α, -ον', pos:'adj', eng:'your (pl.), yours, your own', lesson:21, note:'Possessive adjective' },
  // Lesson 22
  { greek:'ἄγω', forms:'ἄξω, ἤγαγον, ἦχα, ἦγμαι', pos:'verb', eng:'lead; βίον ἄγειν = lead a life', lesson:22, note:'cf. pedagogue' },
  { greek:'νόμος', forms:'-ου, ὁ', pos:'noun', eng:'law, custom', lesson:22, note:'cf. autonomy, metronome' },
  { greek:'ψυχή', forms:'-ῆς, ἡ', pos:'noun', eng:'spirit, soul, life', lesson:22, note:'cf. psychedelic, psychology' },
  { greek:'ἄλλος', forms:'-η, -ο', pos:'adj', eng:'other, another; οἱ ἄλλοι = the others, the rest', lesson:22, note:'cf. allegory, allergy' },
  { greek:'ζῷον', forms:'-ου, τό', pos:'noun', eng:'animal', lesson:22, note:'cf. protozoa, zodiac, zoology' },
  { greek:'παρά', forms:'', pos:'prep', eng:'(+ gen.) from; (+ dat.) beside, at the house of; (+ acc.) to, contrary to', lesson:22, note:'παρ᾽ before vowel; cf. paradox' },
  { greek:'τε', forms:'enclitic', pos:'conj', eng:'and; τε…καί / τε…τε = both…and', lesson:22, note:'Enclitic; postpositive; correlative' },
  { greek:'οὐδέ / μηδέ', forms:'', pos:'conj', eng:'and not, nor; not even; οὐδέ…οὐδέ = neither…nor', lesson:22, note:'οὐδ᾽ / μηδ᾽ before vowel' },
  { greek:'οὔτε / μήτε', forms:'', pos:'conj', eng:'and not, nor; οὔτε…οὔτε = neither…nor', lesson:22, note:'οὔτ᾽ / μήτ᾽ before smooth breathing' },
  // Lesson 23
  { greek:'ὁράω', forms:'ὄψομαι, εἶδον, ἑώρακα, ἑώραμαι/ὦμμαι', pos:'verb', eng:'see, behold, look at; (pass.) be seen, appear', lesson:23, note:'Three different stems: ὁορ-, ἰδ-, ὀπ-' },
  { greek:'ἔτος', forms:'-ους, τό', pos:'noun', eng:'year', lesson:23, note:'cf. etesian' },
  { greek:'ἡμέρα', forms:'-ας, ἡ', pos:'noun', eng:'day', lesson:23, note:'cf. ephemeral' },
  { greek:'νύξ', forms:'νυκτός, ἡ', pos:'noun', eng:'night', lesson:23, note:'cf. nyctalopia' },
  { greek:'χρόνος', forms:'-ου, ὁ', pos:'noun', eng:'time', lesson:23, note:'cf. chronology, diachronic' },
  { greek:'ὅς, ἥ, ὅ', forms:'', pos:'pron', eng:'(relative pronoun) who, which, that', lesson:23, note:'Like def. article without initial τ' },
  { greek:'πᾶς, πᾶσα, πᾶν', forms:'', pos:'adj', eng:'all, every, whole, entire', lesson:23, note:'cf. diapason, pandemonium' },
  { greek:'τήμερον', forms:'indecl. adv.', pos:'adv', eng:'today', lesson:23, note:'' },
  { greek:'ἀμφί', forms:'', pos:'prep', eng:'(+ gen.) about, concerning; (+ acc.) around', lesson:23, note:'cf. amphibious, amphitheater' },
  { greek:'ἀνά', forms:'', pos:'prep', eng:'(+ acc.) up, up along, by', lesson:23, note:'cf. anachronism, analogy' },
  { greek:'ἕως', forms:'', pos:'conj', eng:'while, as long as', lesson:23, note:'Introduces simultaneous adverbial clause' },
  // Lesson 24
  { greek:'καλέω', forms:'καλῶ, ἐκάλεσα, κέκληκα, κέκλημαι', pos:'verb', eng:'call, summon, invite, name', lesson:24, note:'cf. Paraclete' },
  { greek:'δεῖπνον', forms:'-ου, τό', pos:'noun', eng:'meal, dinner', lesson:24, note:'' },
  { greek:'ἐλπίς', forms:'-ίδος, ἡ', pos:'noun', eng:'hope (+ gen. or inf.)', lesson:24, note:'' },
  { greek:'θύρα', forms:'-ας, ἡ', pos:'noun', eng:'door', lesson:24, note:'cf. thyroid' },
  { greek:'ξενία', forms:'-ας, ἡ', pos:'noun', eng:'hospitality, guest-friendship', lesson:24, note:'' },
  { greek:'ξένος', forms:'-ου, ὁ', pos:'noun', eng:'stranger, guest, host', lesson:24, note:'cf. xenon, xenophobia' },
  { greek:'ἄνευ', forms:'', pos:'prep', eng:'(+ gen.) without', lesson:24, note:'' },
  { greek:'ἅτε', forms:'particle', pos:'adv', eng:'(+ ptcple.) because', lesson:24, note:'Clarifies causal circumstantial participle' },
  { greek:'καίπερ', forms:'particle', pos:'adv', eng:'(+ ptcple.) although', lesson:24, note:'Enclitic -περ makes accent acute' },
  { greek:'ὡς', forms:'particle/conj', pos:'adv', eng:'(+ ptcple.) as, as if, on grounds that; (conj.) since, after, when', lesson:24, note:'Proclitic; no accent' },
  // Lesson 25
  { greek:'διδάσκω', forms:'διδάξω, ἐδίδαξα, δεδίδαχα, δεδίδαγμαι', pos:'verb', eng:'teach (often with double acc. of person and thing)', lesson:25, note:'cf. didactic' },
  { greek:'παύω', forms:'παύσω, ἔπαυσα, πέπαυκα, πέπαυμαι', pos:'verb', eng:'(act.) stop; (mid.) stop, cease, come to a stop', lesson:25, note:'cf. pause' },
  { greek:'διδάσκαλος', forms:'-ου, ὁ/ἡ', pos:'noun', eng:'teacher, dramatist', lesson:25, note:'' },
  { greek:'δόξα', forms:'-ης, ἡ', pos:'noun', eng:'opinion, reputation, fame, glory', lesson:25, note:'cf. doxology, orthodox' },
  { greek:'παιδίον', forms:'-ου, τό', pos:'noun', eng:'young child, little child', lesson:25, note:'' },
  { greek:'παῖς', forms:'παιδός, ὁ/ἡ', pos:'noun', eng:'child, son, daughter', lesson:25, note:'cf. pediatrics; monosyllabic 3rd decl.' },
  { greek:'σῶμα', forms:'-ατος, τό', pos:'noun', eng:'body (opposite of ψυχή)', lesson:25, note:'cf. chromosome, psychosomatic' },
  { greek:'μέγας, μεγάλη, μέγα', forms:'', pos:'adj', eng:'big, large, great, tall', lesson:25, note:'cf. megalomania; irregular M nom./acc. sg.' },
  // Lesson 26
  { greek:'ὀφθαλμός', forms:'-οῦ, ὁ', pos:'noun', eng:'eye', lesson:26, note:'cf. ophthalmology' },
  { greek:'ὅστις, ἥτις, ὅ τι', forms:'', pos:'pron', eng:'(indirect interrog.) what? which?; who? what?', lesson:26, note:'Compound of relative + indefinite' },
  { greek:'πόθεν', forms:'', pos:'adv', eng:'from where? whence?', lesson:26, note:'Direct interrogative adverb' },
  { greek:'ποῖ', forms:'', pos:'adv', eng:'to where? whither?', lesson:26, note:'Direct interrogative adverb' },
  { greek:'πότε', forms:'', pos:'adv', eng:'when?', lesson:26, note:'Direct interrogative adverb' },
  { greek:'ποῦ', forms:'', pos:'adv', eng:'where?', lesson:26, note:'Direct interrogative adverb' },
  { greek:'πῶς', forms:'', pos:'adv', eng:'how?', lesson:26, note:'Direct interrogative adverb' },
  { greek:'ὅπου', forms:'', pos:'adv', eng:'(indirect) where?', lesson:26, note:'Indirect interrogative adverb' },
  { greek:'ὅπως', forms:'', pos:'adv', eng:'(indirect) how?', lesson:26, note:'Indirect interrogative adverb' },
  { greek:'εἰ', forms:'proclitic', pos:'conj', eng:'(indirect question) whether', lesson:26, note:'Proclitic; no accent' },
  { greek:'εἴτε…εἴτε', forms:'', pos:'conj', eng:'(alternative indirect question) whether…or', lesson:26, note:'' },
  // Lesson 27
  { greek:'ἀνοίγω', forms:'ἀνοίξω, ἀνέῳξα, ἀνέῳχα, ἀνέῳγμαι, ἀνεῴχθην', pos:'verb', eng:'open, open up', lesson:27, note:'Compound of ἀνα- + οἴγω; peculiar augments' },
  { greek:'κρίνω', forms:'κρινῶ, ἔκρῑνα, κέκρικα, κέκριμαι, ἐκρίθην', pos:'verb', eng:'separate, choose, judge, decide', lesson:27, note:'cf. crisis, critic' },
  { greek:'ἡλικία', forms:'-ας, ἡ', pos:'noun', eng:'age, prime of life; ἡλικίαν ἔχειν = be of age', lesson:27, note:'' },
  { greek:'υἱός', forms:'-οῦ, ὁ', pos:'noun', eng:'son', lesson:27, note:'' },
  { greek:'νέος', forms:'-α, -ον', pos:'adj', eng:'young, new', lesson:27, note:'cf. neon, neophyte' },
  { greek:'παλαιός', forms:'-ά, -όν', pos:'adj', eng:'old, ancient', lesson:27, note:'cf. paleography, Paleozoic' },
  { greek:'τυφλός', forms:'-ή, -όν', pos:'adj', eng:'blind', lesson:27, note:'' },
  { greek:'ἄρτι', forms:'', pos:'adv', eng:'just now', lesson:27, note:'' },
  { greek:'ἤδη', forms:'', pos:'adv', eng:'already', lesson:27, note:'' },
  { greek:'πάλαι', forms:'', pos:'adv', eng:'long ago', lesson:27, note:'' },
  // Lesson 28
  { greek:'ἁμαρτάνω', forms:'ἁμαρτήσομαι, ἥμαρτον, ἡμάρτηκα, ἡμάρτηκα, ἡμαρτήθην', pos:'verb', eng:'make a mistake, fail, err, sin; (+ gen.) miss', lesson:28, note:'' },
  { greek:'γεννάω', forms:'γεννήσω, ἐγέννησα, γεγέννηκα, γεγέννηκα, ἐγεννήθην', pos:'verb', eng:'beget, give birth to, bear', lesson:28, note:'' },
  { greek:'οἶδα', forms:'(pluperf. ᾔδη), εἴσομαι', pos:'verb', eng:'know; (+ inf.) know how to', lesson:28, note:'Always active; perfect forms = present sense' },
  { greek:'πιστεύω', forms:'πιστεύσω, ἐπίστευσα, πεπίστευκα, πεπίστευμαι, ἐπιστεύθην', pos:'verb', eng:'(+ dat.) believe (in), trust (in), have faith (in)', lesson:28, note:'' },
  { greek:'ἁμαρτία', forms:'-ας, ἡ', pos:'noun', eng:'mistake, failure, error, sin', lesson:28, note:'' },
  { greek:'κόσμος', forms:'-ου, ὁ', pos:'noun', eng:'order, adornment, world, universe', lesson:28, note:'cf. cosmetic, cosmic' },
  { greek:'κύριος', forms:'-α, -ον', pos:'adj', eng:'having authority; (subst.) lord, master / lady, mistress', lesson:28, note:'' },
  { greek:'οὔποτε / μήποτε', forms:'', pos:'adv', eng:'never', lesson:28, note:'' },
  { greek:'οὔπω / μήπω', forms:'', pos:'adv', eng:'not yet', lesson:28, note:'' },
  { greek:'ὅτι', forms:'', pos:'conj', eng:'(causal conj.) because, since', lesson:28, note:'Not elided; = ἐπεί, ἐπειδή, ὡς' },
  // Lesson 29
  { greek:'ἄστυ', forms:'-εως, τό', pos:'noun', eng:'city', lesson:29, note:'cf. Astyanax; υ-stem 3rd decl.' },
  { greek:'βασιλεύς', forms:'-έως, ὁ', pos:'noun', eng:'king', lesson:29, note:'cf. basil, basilica; ευ-stem 3rd decl.' },
  { greek:'ἑσπέρα', forms:'-ας, ἡ', pos:'noun', eng:'evening', lesson:29, note:'cf. Hesperia' },
  { greek:'θόρυβος', forms:'-ου, ὁ', pos:'noun', eng:'uproar, confusion', lesson:29, note:'' },
  { greek:'θυγάτηρ', forms:'-τρός, ἡ', pos:'noun', eng:'daughter', lesson:29, note:'Syncopated stem' },
  { greek:'μήτηρ', forms:'-τρός, ἡ', pos:'noun', eng:'mother', lesson:29, note:'Syncopated stem' },
  { greek:'πατήρ', forms:'-τρός, ὁ', pos:'noun', eng:'father', lesson:29, note:'Syncopated stem' },
  { greek:'πόλις', forms:'-εως, ἡ', pos:'noun', eng:'city-state, city, state', lesson:29, note:'cf. acropolis, metropolis; ι-stem 3rd decl.' },
  { greek:'πρύτανις', forms:'-εως, ὁ', pos:'noun', eng:'prytanis (one of 50 members of a tribe running Athens for a month)', lesson:29, note:'' },
  { greek:'στρατηγός', forms:'-οῦ, ὁ', pos:'noun', eng:'general (one of 10 elected officials running Athens\' army and navy)', lesson:29, note:'cf. strategy' },
  // Lesson 30
  { greek:'ἀφικνέομαι', forms:'ἀφίξομαι, ἀφικόμην, —, ἀφῖγμαι, —', pos:'verb', eng:'(+ ἐπί/εἰς + acc.) arrive at, come to', lesson:30, note:'Middle deponent' },
  { greek:'βούλομαι', forms:'βουλήσομαι, —, —, βεβούλημαι, ἐβουλήθην', pos:'verb', eng:'(+ inf.) wish (to), desire (to), prefer (to)', lesson:30, note:'Passive deponent' },
  { greek:'ἀνήρ', forms:'ἀνδρός, ὁ', pos:'noun', eng:'man, husband', lesson:30, note:'cf. android; syncopated with δ inserted' },
  { greek:'βουλή', forms:'-ῆς, ἡ', pos:'noun', eng:'plan, counsel, council (Athens\' senate of 500)', lesson:30, note:'' },
  { greek:'ἐκκλησία', forms:'-ας, ἡ', pos:'noun', eng:'assembly (citizens called forth to assemble)', lesson:30, note:'cf. ecclesiastic' },
  { greek:'κῆρυξ', forms:'-υκος, ὁ', pos:'noun', eng:'herald', lesson:30, note:'' },
  { greek:'πατρίς', forms:'-ίδος, ἡ', pos:'noun', eng:'fatherland, native country', lesson:30, note:'' },
  { greek:'φωνή', forms:'-ῆς, ἡ', pos:'noun', eng:'voice, sound', lesson:30, note:'cf. phonetics, symphony, telephone' },
  { greek:'εἷς, μία, ἕν', forms:'', pos:'adj', eng:'one; (subst.) one person, one thing', lesson:30, note:'cf. henotheism; mixed declension' },
];

const PRINCIPAL_PARTS = [
  // vowel stems
  { pp:['παύω','παύσω','ἔπαυσα','πέπαυκα','πέπαυμαι','ἐπαύθην'], type:'vowel', eng:'stop (act.); cease (mid.)' },
  { pp:['δουλεύω','δουλεύσω','ἐδούλευσα','δεδούλευκα','δεδούλευμαι','ἐδουλεύθην'], type:'vowel', eng:'be a slave, serve' },
  { pp:['παιδεύω','παιδεύσω','ἐπαίδευσα','πεπαίδευκα','πεπαίδευμαι','ἐπαιδεύθην'], type:'vowel', eng:'educate, teach' },
  { pp:['φιλέω','φιλήσω','ἐφίλησα','πεφίληκα','πεφίλημαι','ἐφιλήθην'], type:'vowel', eng:'love, be fond of' },
  { pp:['ποιέω','ποιήσω','ἐποίησα','πεποίηκα','πεποίημαι','ἐποιήθην'], type:'vowel', eng:'make, do, create' },
  { pp:['λύω','λύσω','ἔλυσα','λέλυκα','λέλυμαι','ἐλύθην'], type:'vowel', eng:'free, loose, destroy' },
  { pp:['φοβέω','φοβήσω','ἐφόβησα','πεφόβηκα','πεφόβημαι','ἐφοβήθην'], type:'vowel', eng:'frighten; (mid.) fear' },
  { pp:['καλέω','καλῶ','ἐκάλεσα','κέκληκα','κέκλημαι','ἐκλήθην'], type:'vowel', eng:'call, summon, name' },
  { pp:['ζητέω','ζητήσω','ἐζήτησα','ἐζήτηκα','ἐζήτημαι','ἐζητήθην'], type:'vowel', eng:'seek, investigate' },
  { pp:['ἐρωτάω','ἐρωτήσω','ἠρώτησα','ἠρώτηκα','ἠρώτημαι','ἠρωτήθην'], type:'vowel', eng:'ask (a question)' },
  { pp:['δηλόω','δηλώσω','ἐδήλωσα','δεδήλωκα','δεδήλωμαι','ἐδηλώθην'], type:'vowel', eng:'make clear, show' },
  { pp:['θύω','θύσω','ἔθυσα','τέθυκα','τέθυμαι','ἐτύθην'], type:'vowel', eng:'sacrifice' },
  { pp:['ἀκούω','ἀκούσομαι','ἤκουσα','ἀκήκοα','—','ἠκούσθην'], type:'vowel', eng:'hear, listen to' },
  // dental stems
  { pp:['ἁρπάζω','ἁρπάσω','ἥρπασα','ἥρπακα','ἥρπασμαι','ἡρπάσθην'], type:'dental', eng:'seize, snatch, plunder' },
  { pp:['κομίζω','κομιῶ','ἐκόμισα','κεκόμικα','κεκόμισμαι','ἐκομίσθην'], type:'dental', eng:'take care of, convey' },
  { pp:['πείθω','πείσω','ἔπεισα','πέπεικα/πέποιθα','πέπεισμαι','ἐπείσθην'], type:'dental', eng:'persuade; (mid.) trust (πέποιθα)' },
  // liquid/nasal stems
  { pp:['ἀγγέλλω','ἀγγελῶ','ἤγγειλα','ἤγγελκα','ἤγγελμαι','ἠγγέλθην'], type:'liquid', eng:'announce, report' },
  { pp:['βάλλω','βαλῶ','ἔβαλον','βέβληκα','βέβλημαι','ἐβλήθην'], type:'liquid', eng:'throw, hit' },
  { pp:['λέγω','ἐρῶ/λέξω','εἶπον/ἔλεξα','εἴρηκα','εἴρημαι/λέλεγμαι','ἐρρήθην/ἐλέχθην'], type:'liquid', eng:'say, speak, tell' },
  { pp:['μένω','μενῶ','ἔμεινα','μεμένηκα','—','—'], type:'liquid', eng:'stay, remain, wait for' },
  { pp:['ἀποθνῄσκω','ἀποθανοῦμαι','ἀπέθανον','τέθνηκα','—','—'], type:'liquid', eng:'die, be killed' },
  { pp:['ἀποκτείνω','ἀποκτενῶ','ἀπέκτεινα','ἀπέκτονα','—','—'], type:'liquid', eng:'kill' },
  { pp:['εὑρίσκω','εὑρήσω','εὗρον/ηὗρον','εὕρηκα/ηὕρηκα','εὕρημαι/ηὕρημαι','εὑρέθην/ηὑρέθην'], type:'liquid', eng:'find, discover' },
  // labial stems
  { pp:['γράφω','γράψω','ἔγραψα','γέγραφα','γέγραμμαι','ἐγράφην'], type:'labial', eng:'write, draw' },
  { pp:['λείπω','λείψω','ἔλιπον','λέλοιπα','λέλειμμαι','ἐλείφθην'], type:'labial', eng:'leave, abandon' },
  { pp:['λαμβάνω','λήψομαι','ἔλαβον','εἴληφα','εἴλημμαι','ἐλήφθην'], type:'labial', eng:'take, seize, receive' },
  { pp:['βλέπω','βλέψομαι','ἔβλεψα','βέβλεφα','βέβλεμμαι','ἐβλέφθην'], type:'labial', eng:'look (at), see' },
  { pp:['πέμπω','πέμψω','ἔπεμψα','πέπομφα','πέπεμμαι','ἐπέμφθην'], type:'labial', eng:'send' },
  { pp:['ῥίπτω','ῥίψω','ἔρριψα','ἔρριφα','ἔρριμμαι','ἐρρίφθην'], type:'labial', eng:'throw, hurl, cast aside' },
  { pp:['φεύγω','φεύξομαι','ἔφυγον','πέφευγα','—','—'], type:'labial', eng:'flee, escape' },
  // palatal stems
  { pp:['ἄγω','ἄξω','ἤγαγον','ἦχα','ἦγμαι','ἤχθην'], type:'palatal', eng:'lead, bring' },
  { pp:['διώκω','διώξω','ἐδίωξα','δεδίωχα','δεδίωγμαι','ἐδιώχθην'], type:'palatal', eng:'pursue, prosecute' },
  { pp:['πράττω','πράξω','ἔπραξα','πέπρᾱγα/πέπρᾱχα','πέπρᾱγμαι','ἐπράχθην'], type:'palatal', eng:'do, act, fare' },
  { pp:['φυλάττω','φυλάξω','ἐφύλαξα','πεφύλαχα','πεφύλαγμαι','ἐφυλάχθην'], type:'palatal', eng:'guard, watch, protect' },
  { pp:['κρίνω','κρινῶ','ἔκρῑνα','κέκρικα','κέκριμαι','ἐκρίθην'], type:'palatal', eng:'separate, judge, decide' },
  { pp:['φέρω','οἴσω','ἤνεγκα/ἤνεγκον','ἐνήνοχα','ἐνήνεγμαι','ἠνέχθην'], type:'palatal', eng:'carry, bear, bring' },
];

const GRAMMAR_FLASHCARDS = [
  { front:'What is reduplication?', back:'Doubling a sound at the start of a verb stem to form the perfect. Rule 1: initial consonant + ε (e.g., πε-παίδευκα). Rule 2: augment the stem (for vowel-initial or complex-consonant stems).' },
  { front:'How do you form the perfect active of παιδεύω?', back:'Reduplicate stem (πε-) + παιδευ- + κ + -α. Full: πεπαίδευκα, πεπαίδευκας, πεπαίδευκε(ν), πεπαιδεύκαμεν, πεπαιδεύκατε, πεπαιδεύκᾱσι(ν).' },
  { front:'Perfect vs. Pluperfect — what is the difference?', back:'Perfect = present state from completed action ("I have taught"). Pluperfect = past state from completed action ("I had taught"). Pluperfect adds augment to perfect stem and uses endings in -η, -ης, -ει, -εμεν, -ετε, -εσαν.' },
  { front:'What endings distinguish perfect active from pluperfect active?', back:'Perfect: -α, -ας, -ε(ν), -αμεν, -ατε, -ᾱσι(ν). Pluperfect: -η(-εα), -ης, -ει(ν), -εμεν, -ετε, -εσαν. Only 3rd plural reveals primary vs. secondary endings.' },
  { front:'What happens when an aspirated stop begins the stem in reduplication?', back:'Use the corresponding smooth stop in the prefix to avoid two consecutive aspirated syllables. E.g., θύω → τε- (not θε-θυκα).' },
  { front:'τίς vs. τις — what is the difference?', back:'τίς (accented) = interrogative: "who? what? which?". τις (enclitic) = indefinite: "someone, something, a/an, some, any."' },
  { front:'What does neuter τί mean when used as an adverb?', back:'"Why?" (literally "in respect to what?").' },
  { front:'When do you use the dative of personal agent?', back:'With perfect and pluperfect PASSIVE verbs. E.g., ἐμοί τοῦτο πέπρακται = "This has been done by me." (All other tenses use ὑπό + gen.)' },
  { front:'What are the three expressions of time and their cases?', back:'Genitive = time within which (action at some point within the period). Dative = time when (action at a single moment). Accusative = extent of time (action throughout the entire period).' },
  { front:'What is a genitive absolute?', back:'A noun/pronoun in the genitive + a participle, where the noun has NO function in the main clause. It floats alongside to express time, cause, concession, or condition.' },
  { front:'How is the relative pronoun ὅς different from the definite article?', back:'The relative pronoun drops the initial τ and adds rough breathing. Nominatives ὅ, ἥ, οἵ, αἵ differ from ὁ, ἡ, οἱ, αἱ only by having an accent.' },
  { front:'Rules for indirect questions in Greek', back:'1. Keep same mood AND tense as direct question. 2. Adjust person. 3. If no interrogative word, add εἰ ("whether"). 4. Replace τίς → ὅστις; π- adverbs → ὅπ- adverbs.' },
  { front:'How is the aorist passive formed?', back:'6th principal part. Add -θη-/-θε- (1st aor. pass.) or -η-/-ε- (2nd aor. pass.) to basic stem. THEN add secondary ACTIVE endings (-ν, -ς, —, -μεν, -τε, -σαν). Augment in indicative only.' },
  { front:'What are the euphonic changes before -θη- in the aorist passive?', back:'Dental → drops + σ added (ἐπείσθην). Labial π/β → roughens to φ (ἐπέμφθην). Palatal γ/κ → roughens to χ (ἐδιώχθην). θ before -θη- → changes to τ (ἐτύθην).' },
  { front:'How do deponent verbs work?', back:'Middle deponents: always middle/passive in form, always active in meaning; have aorist middle (e.g., ἀφικνέομαι → ἀφικόμην). Passive deponents: have aorist passive (e.g., βούλομαι → ἐβουλήθην).' },
  { front:'What is the difference between ἅτε, καίπερ, and ὡς with participles?', back:'ἅτε = because (causal). καίπερ = although (concessive). ὡς = as if / on the grounds that (often with future participles to express professed purpose).' },
  { front:'πᾶς — three uses based on position', back:'Predicate + def. art. noun = "all the ___". Predicate + anarthrous noun = "every ___". Attributive position = "the whole ___". Substantive alone = "everyone / all things."' },
  { front:'What is quantitative metathesis?', back:'The swap of vowel quantities: η becomes short, ο becomes long. Occurs in ι-stem and υ-stem nouns\' genitive singular: πόλη-ος → πόλεως. The accent stays in its original position despite the shift.' },
  { front:'How is the future passive formed?', back:'Aorist passive stem (no augment) + σ + thematic vowel + primary passive endings. E.g., παιδευθ-ήσ-ομαι. If 2nd aor. passive, no θ in the stem.' },
  { front:'Forms of οἶδα — perfect forms with present meaning', back:'οἶδα, οἶσθα, οἶδε(ν) / ἴσμεν, ἴστε, ἴσᾱσι(ν). Infinitive: εἰδέναι. Participle: εἰδώς, εἰδυῖα, εἰδός ("knowing").' },
];

const GRAMMAR_QUIZ_Q = [
  { q:'Which case is used for the person responsible for an action with perfect/pluperfect passive verbs?', opts:['Genitive','Accusative','Dative','Nominative'], ans:2, exp:'The dative of personal agent (no preposition) is used with perfect and pluperfect passives.' },
  { q:'What does the indefinite pronoun τις mean?', opts:['who? what?','someone, something, a/an','never','how?'], ans:1, exp:'τις (enclitic) is indefinite: someone, something, a certain, some, any.' },
  { q:'Which particle + participle expresses "although"?', opts:['ἅτε','ὡς','καίπερ','ἕως'], ans:2, exp:'καίπερ (+ participle) means "although" — it signals a concessive circumstantial participle.' },
  { q:'In an expression of time, which case indicates "for many days" (throughout the entire period)?', opts:['Genitive','Dative','Accusative','Nominative'], ans:2, exp:'The accusative of extent of time shows action lasting throughout an entire period.' },
  { q:'What suffix is characteristic of the perfect active tense?', opts:['σ-','κ-','θη-','ντ-'], ans:1, exp:'The letter κ is characteristic of the perfect and pluperfect active tenses.' },
  { q:'How does the aorist passive defy grammatical "logic" in its endings?', opts:['It uses middle instead of passive endings','It uses secondary ACTIVE instead of secondary passive endings','It uses primary endings','It has no endings'], ans:1, exp:'The aorist passive uses secondary ACTIVE personal endings (-ν, -ς, —, -μεν, -τε, -σαν) rather than passive ones.' },
  { q:'Which of the following is a passive deponent?', opts:['ἀφικνέομαι','εἰμί','βούλομαι','ὁράω'], ans:2, exp:'βούλομαι is a passive deponent: it has a 6th principal part (ἐβουλήθην).' },
  { q:'What happens to an aspirated stop (φ, θ, χ) at the start of a stem when reduplicated?', opts:['It stays the same','The corresponding smooth stop (π, τ, κ) is used instead','It is deleted','It changes to ε'], ans:1, exp:'To avoid two consecutive aspirated syllables, the smooth stop replaces the aspirated one in the reduplication prefix.' },
  { q:'What is the plural of πᾶς in the predicate position without an article?', opts:['the whole group','all of them','every / all (conceivable)','some'], ans:2, exp:'πᾶς in predicate position with a noun that has no article means "every" or "all (conceivable)".' },
  { q:'A relative pronoun in Greek agrees with its antecedent in…', opts:['case only','gender and number only','gender, number, and case','gender only'], ans:1, exp:'A relative pronoun agrees with its antecedent in gender and number, but its case is determined by its function in the relative clause.' },
  { q:'In quantitative metathesis, what swap occurs?', opts:['η↔ω','ε↔ο','η becomes short, ο becomes long','α becomes η'], ans:2, exp:'In quantitative metathesis, η becomes short and ο becomes long (e.g., πόλη-ος → πόλεως).' },
  { q:'Which construction uses a noun + participle both in the genitive, where the noun plays no role in the main clause?', opts:['Accusative absolute','Genitive absolute','Dative absolute','Nominative absolute'], ans:1, exp:'The genitive absolute: noun + participle in the genitive, grammatically separate from the main clause.' },
  { q:'ὅστις is formed from…', opts:['two definite articles','relative pronoun + indefinite pronoun','two interrogative pronouns','interrogative + demonstrative'], ans:1, exp:'ὅστις = ὅς (relative) + τις (indefinite), each part declined separately.' },
  { q:'What is the future tense of οἶδα?', opts:['εἶδον','εἰδέναι','εἴσομαι','ᾔδη'], ans:2, exp:'The future of οἶδα is εἴσομαι "I shall know," formed like a future middle.' },
  { q:'What does τέ…καί mean?', opts:['either…or','neither…nor','both…and','not…but'], ans:2, exp:'τε…καί is a correlative pair meaning "both…and."' },
];

const VERB_FORMS = [
  { form:'πεπαίδευκα', ans:'perfect active indicative, 1st sg.' },
  { form:'ἐπαιδεύθην', ans:'aorist passive indicative, 1st sg.' },
  { form:'παιδευόμενος', ans:'present middle/passive participle, nom. masc. sg.' },
  { form:'παιδεύσας', ans:'1st aorist active participle, nom. masc. sg.' },
  { form:'παιδευθείς', ans:'aorist passive participle, nom. masc. sg.' },
  { form:'πεπαιδευκώς', ans:'perfect active participle, nom. masc. sg.' },
  { form:'παιδευθήσομαι', ans:'future passive indicative, 1st sg.' },
  { form:'πεπαίδευμαι', ans:'perfect middle/passive indicative, 1st sg.' },
  { form:'ἐπεπαιδεύκη', ans:'pluperfect active indicative, 1st sg.' },
  { form:'παιδευσόμενος', ans:'future middle participle, nom. masc. sg.' },
  { form:'οἶδα', ans:'perfect active indicative of οἶδα, 1st sg. ("I know")' },
  { form:'εἰδώς', ans:'perfect active participle of οἶδα, nom. masc. sg. ("knowing")' },
];

// ── STATE ─────────────────────────────────────────────────────
const state = {
  fcDeck: [],
  fcIndex: 0,
  fcFlipped: false,
  fcStats: { hard: 0, ok: 0, good: 0 },
  quizType: null,
  quizQuestions: [],
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  sections: ['home','grammar','vocab','flashcards','quiz','paradigms','principal'],
  visitedSections: new Set(),
};

// ── NAVIGATION ────────────────────────────────────────────────
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const sec = document.getElementById(id);
  if (sec) sec.classList.add('active');
  const link = document.querySelector(`[data-section="${id}"]`);
  if (link) link.classList.add('active');
  state.visitedSections.add(id);
  updateProgress();
  // close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
  document.querySelector('.sidebar-overlay')?.classList.remove('show');
}

function updateProgress() {
  const pct = Math.round((state.visitedSections.size / state.sections.length) * 100);
  document.getElementById('sessionProgress').style.width = pct + '%';
  document.getElementById('progressText').textContent = pct + '% complete';
}

// ── SIDEBAR / HAMBURGER ───────────────────────────────────────
function initNav() {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);
  overlay.addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
    overlay.classList.remove('show');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showSection(link.dataset.section);
    });
  });
  document.querySelectorAll('[data-goto]').forEach(card => {
    card.addEventListener('click', () => showSection(card.dataset.goto));
  });
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
    overlay.classList.toggle('show');
  });
}

// ── ACCORDION ────────────────────────────────────────────────
function initAccordion() {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isOpen = body.classList.contains('open');
      // close all
      document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.accordion-btn').forEach(b => b.classList.remove('open'));
      if (!isOpen) {
        body.classList.add('open');
        btn.classList.add('open');
      }
    });
  });
}

// ── VOCABULARY TABLE ─────────────────────────────────────────
function buildVocabTable(data) {
  const tbody = document.getElementById('vocabBody');
  tbody.innerHTML = '';
  data.forEach(w => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${w.greek}</td>
      <td>${w.pos}</td>
      <td>${w.eng}</td>
      <td>${w.lesson}</td>
      <td>${w.note || ''}</td>`;
    tbody.appendChild(tr);
  });
  document.getElementById('vocabCount').textContent =
    `Showing ${data.length} of ${VOCAB.length} entries`;
}

function filterVocab() {
  const search = document.getElementById('vocabSearch').value.toLowerCase();
  const lesson = document.getElementById('vocabLesson').value;
  const pos = document.getElementById('vocabPOS').value;
  const filtered = VOCAB.filter(w => {
    const matchSearch = !search ||
      w.greek.toLowerCase().includes(search) ||
      w.eng.toLowerCase().includes(search) ||
      w.note.toLowerCase().includes(search);
    const matchLesson = lesson === 'all' || w.lesson == lesson;
    const matchPos = pos === 'all' || w.pos === pos;
    return matchSearch && matchLesson && matchPos;
  });
  buildVocabTable(filtered);
}

function initVocab() {
  buildVocabTable(VOCAB);
  document.getElementById('vocabSearch').addEventListener('input', filterVocab);
  document.getElementById('vocabLesson').addEventListener('change', filterVocab);
  document.getElementById('vocabPOS').addEventListener('change', filterVocab);
}

// ── PRINCIPAL PARTS TABLE ────────────────────────────────────
function buildPPTable(data) {
  const tbody = document.getElementById('ppBody');
  tbody.innerHTML = '';
  data.forEach(v => {
    const tr = document.createElement('tr');
    tr.innerHTML = v.pp.map(p => `<td>${p}</td>`).join('') + `<td>${v.eng}</td>`;
    tbody.appendChild(tr);
  });
}
function filterPP() {
  const search = document.getElementById('ppSearch').value.toLowerCase();
  const type = document.getElementById('ppFilter').value;
  const filtered = PRINCIPAL_PARTS.filter(v => {
    const matchSearch = !search || v.pp.join(' ').toLowerCase().includes(search) || v.eng.toLowerCase().includes(search);
    const matchType = type === 'all' || v.type === type;
    return matchSearch && matchType;
  });
  buildPPTable(filtered);
}
function initPrincipal() {
  buildPPTable(PRINCIPAL_PARTS);
  document.getElementById('ppSearch').addEventListener('input', filterPP);
  document.getElementById('ppFilter').addEventListener('change', filterPP);
}

// ── FLASHCARDS ───────────────────────────────────────────────
function buildVocabDeck() {
  return VOCAB.map(w => ({
    front: w.greek, frontSub: w.forms || '',
    back: w.eng, backSub: `L${w.lesson} · ${w.pos}${w.note ? ' · ' + w.note : ''}`
  }));
}
function buildGrammarDeck() {
  return GRAMMAR_FLASHCARDS.map(c => ({
    front: c.front, frontSub: 'Grammar Concept',
    back: c.back, backSub: ''
  }));
}
function buildPrincipalDeck() {
  return PRINCIPAL_PARTS.map(v => ({
    front: v.pp[0], frontSub: 'Give all 6 principal parts',
    back: v.pp.join(' · '), backSub: v.eng
  }));
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderFC() {
  const card = state.fcDeck[state.fcIndex];
  if (!card) return;
  document.getElementById('fcFrontText').textContent = card.front;
  document.getElementById('fcFrontSub').textContent = card.frontSub;
  document.getElementById('fcBackText').textContent = card.back;
  document.getElementById('fcBackSub').textContent = card.backSub;
  document.getElementById('fcCounter').textContent =
    `${state.fcIndex + 1} / ${state.fcDeck.length}`;
  // reset flip
  state.fcFlipped = false;
  document.getElementById('fcInner').classList.remove('flipped');
}

function initFlashcards() {
  state.fcDeck = buildVocabDeck();
  renderFC();

  document.getElementById('fcCard').addEventListener('click', () => {
    state.fcFlipped = !state.fcFlipped;
    document.getElementById('fcInner').classList.toggle('flipped', state.fcFlipped);
  });
  document.getElementById('fcPrev').addEventListener('click', () => {
    state.fcIndex = (state.fcIndex - 1 + state.fcDeck.length) % state.fcDeck.length;
    renderFC();
  });
  document.getElementById('fcNext').addEventListener('click', () => {
    state.fcIndex = (state.fcIndex + 1) % state.fcDeck.length;
    renderFC();
  });
  document.getElementById('fcShuffle').addEventListener('click', () => {
    state.fcDeck = shuffle(state.fcDeck);
    state.fcIndex = 0;
    renderFC();
  });
  document.getElementById('fcReset').addEventListener('click', () => {
    state.fcIndex = 0;
    state.fcStats = { hard: 0, ok: 0, good: 0 };
    updateFCStats();
    renderFC();
  });
  document.getElementById('fcDeck').addEventListener('change', e => {
    const v = e.target.value;
    if (v === 'vocab') state.fcDeck = buildVocabDeck();
    else if (v === 'grammar') state.fcDeck = buildGrammarDeck();
    else state.fcDeck = buildPrincipalDeck();
    state.fcIndex = 0;
    state.fcStats = { hard: 0, ok: 0, good: 0 };
    updateFCStats();
    renderFC();
  });
  ['Bad','Ok','Good'].forEach(r => {
    document.getElementById('rate' + r).addEventListener('click', () => {
      state.fcStats[r.toLowerCase()]++;
      updateFCStats();
      state.fcIndex = (state.fcIndex + 1) % state.fcDeck.length;
      renderFC();
    });
  });
}
function updateFCStats() {
  document.getElementById('statHard').textContent = state.fcStats.bad || state.fcStats.Bad || 0;
  document.getElementById('statOk').textContent = state.fcStats.ok || 0;
  document.getElementById('statGood').textContent = state.fcStats.good || 0;
}
// fix stat key mismatch
document.addEventListener('DOMContentLoaded', () => {
  ['Bad','Ok','Good'].forEach(r => {
    const el = document.getElementById('rate' + r);
    if (el) el.addEventListener('click', () => {
      const key = r === 'Bad' ? 'hard' : r.toLowerCase();
      state.fcStats[key] = (state.fcStats[key] || 0) + 1;
      document.getElementById('statHard').textContent = state.fcStats.hard || 0;
      document.getElementById('statOk').textContent = state.fcStats.ok || 0;
      document.getElementById('statGood').textContent = state.fcStats.good || 0;
    });
  });
});

// ── QUIZ ─────────────────────────────────────────────────────
let selectedQuizType = null;

function buildVocabMC(reversed = false) {
  const pool = shuffle(VOCAB).slice(0, parseInt(document.getElementById('quizNum').value));
  return pool.map(w => {
    const correct = reversed ? w.greek : w.eng;
    const question = reversed ? w.eng : w.greek;
    const distractors = shuffle(VOCAB.filter(x => x.greek !== w.greek))
      .slice(0, 3)
      .map(x => reversed ? x.greek : x.eng);
    const opts = shuffle([correct, ...distractors]);
    return { q: question, opts, ans: opts.indexOf(correct), exp: reversed ? `"${w.eng}" → ${w.greek}` : `${w.greek} = ${w.eng}` };
  });
}

function buildGrammarMCQuiz() {
  const n = parseInt(document.getElementById('quizNum').value);
  return shuffle(GRAMMAR_QUIZ_Q).slice(0, n);
}

function buildFormsQuiz() {
  const n = parseInt(document.getElementById('quizNum').value);
  return shuffle(VERB_FORMS).slice(0, n).map(v => {
    const distractors = shuffle(VERB_FORMS.filter(x => x.form !== v.form)).slice(0, 3).map(x => x.ans);
    const opts = shuffle([v.ans, ...distractors]);
    return { q: v.form, opts, ans: opts.indexOf(v.ans), exp: `${v.form} = ${v.ans}` };
  });
}

function renderQuestion() {
  const q = state.quizQuestions[state.quizIndex];
  const total = state.quizQuestions.length;
  const n = state.quizIndex;

  document.getElementById('quizProgressLabel').textContent = `Question ${n + 1} / ${total}`;
  document.getElementById('quizProgFill').style.width = ((n / total) * 100) + '%';
  document.getElementById('quizQNum').textContent = `Q${n + 1}`;
  document.getElementById('quizQuestion').textContent = q.q;
  document.getElementById('quizFeedback').className = 'quiz-feedback';
  document.getElementById('quizFeedback').textContent = '';
  document.getElementById('quizNext').style.display = 'none';

  const opts = document.getElementById('quizOptions');
  opts.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.textContent = opt;
    btn.addEventListener('click', () => answerQuestion(i));
    opts.appendChild(btn);
  });
  state.quizAnswered = false;
}

function answerQuestion(chosen) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;
  const q = state.quizQuestions[state.quizIndex];
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === q.ans) btn.classList.add('correct');
    else if (i === chosen) btn.classList.add('wrong');
  });
  const fb = document.getElementById('quizFeedback');
  if (chosen === q.ans) {
    state.quizScore++;
    document.getElementById('quizScore').textContent = state.quizScore;
    fb.textContent = '✓ Correct! ' + (q.exp || '');
    fb.className = 'quiz-feedback show correct';
  } else {
    fb.textContent = '✗ Incorrect. ' + (q.exp || '');
    fb.className = 'quiz-feedback show wrong';
  }
  document.getElementById('quizNext').style.display = 'inline-flex';
}

function finishQuiz() {
  document.getElementById('quizArena').style.display = 'none';
  const results = document.getElementById('quizResults');
  results.style.display = 'block';
  const total = state.quizQuestions.length;
  const score = state.quizScore;
  const pct = Math.round((score / total) * 100);
  let icon, title;
  if (pct >= 90) { icon = '🏛️'; title = 'Excellent! You\'d make Socrates proud.'; }
  else if (pct >= 70) { icon = '📜'; title = 'Well done! Keep practicing.'; }
  else if (pct >= 50) { icon = '🏺'; title = 'Decent effort. Review and retry!'; }
  else { icon = '⚱️'; title = 'Keep studying — Rome wasn\'t built in a day.'; }
  document.getElementById('resultsIcon').textContent = icon;
  document.getElementById('resultsTitle').textContent = title;
  document.getElementById('resultsScore').textContent = `${score} / ${total}`;
  document.getElementById('resultsBreakdown').textContent = `${pct}% correct`;
}

function initQuiz() {
  document.querySelectorAll('.quiz-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.quiz-type-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedQuizType = btn.dataset.type;
    });
  });

  document.getElementById('startQuiz').addEventListener('click', () => {
    if (!selectedQuizType) {
      alert('Please select a quiz type first.');
      return;
    }
    let qs;
    if (selectedQuizType === 'vocab-mc') qs = buildVocabMC(false);
    else if (selectedQuizType === 'vocab-rev') qs = buildVocabMC(true);
    else if (selectedQuizType === 'grammar-mc') qs = buildGrammarMCQuiz();
    else qs = buildFormsQuiz();

    state.quizQuestions = qs;
    state.quizIndex = 0;
    state.quizScore = 0;
    document.getElementById('quizScore').textContent = '0';
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizArena').style.display = 'block';
    renderQuestion();
  });

  document.getElementById('quizNext').addEventListener('click', () => {
    state.quizIndex++;
    if (state.quizIndex >= state.quizQuestions.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  });

  document.getElementById('quizRetry').addEventListener('click', () => {
    document.getElementById('startQuiz').click();
  });

  document.getElementById('quizNewType').addEventListener('click', () => {
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizArena').style.display = 'none';
    document.getElementById('quizSetup').style.display = 'block';
    selectedQuizType = null;
    document.querySelectorAll('.quiz-type-btn').forEach(b => b.classList.remove('selected'));
  });
}

// ── PARADIGM TABS ────────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + tab).classList.add('active');
    });
  });
}

// ── KEYBOARD NAVIGATION ──────────────────────────────────────
function initKeyboard() {
  document.addEventListener('keydown', e => {
    const active = document.querySelector('.section.active');
    if (!active) return;

    if (active.id === 'flashcards') {
      if (e.key === 'ArrowRight') document.getElementById('fcNext').click();
      else if (e.key === 'ArrowLeft') document.getElementById('fcPrev').click();
      else if (e.key === ' ') { e.preventDefault(); document.getElementById('fcCard').click(); }
      else if (e.key === '1') document.getElementById('rateBad').click();
      else if (e.key === '2') document.getElementById('rateOk').click();
      else if (e.key === '3') document.getElementById('rateGood').click();
    }
    if (active.id === 'quiz' && document.getElementById('quizArena').style.display !== 'none') {
      if (e.key === 'Enter' && state.quizAnswered) document.getElementById('quizNext').click();
    }
  });
}

// ── FIX STAT BUTTON ISSUE (proper listener setup) ────────────
function initFCRating() {
  document.getElementById('rateBad').onclick = () => {
    state.fcStats.hard = (state.fcStats.hard || 0) + 1;
    syncFCStats();
    advanceFC();
  };
  document.getElementById('rateOk').onclick = () => {
    state.fcStats.ok = (state.fcStats.ok || 0) + 1;
    syncFCStats();
    advanceFC();
  };
  document.getElementById('rateGood').onclick = () => {
    state.fcStats.good = (state.fcStats.good || 0) + 1;
    syncFCStats();
    advanceFC();
  };
}
function syncFCStats() {
  document.getElementById('statHard').textContent = state.fcStats.hard || 0;
  document.getElementById('statOk').textContent = state.fcStats.ok || 0;
  document.getElementById('statGood').textContent = state.fcStats.good || 0;
}
function advanceFC() {
  state.fcIndex = (state.fcIndex + 1) % state.fcDeck.length;
  renderFC();
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAccordion();
  initVocab();
  initPrincipal();
  initFlashcards();
  initFCRating(); // replaces the inline rate handlers
  initQuiz();
  initTabs();
  initKeyboard();
  showSection('home');
});
