const batiments = {
    nation1: '📍 ESGI Nation 1 : 242 rue du Faubourg Saint Antoine, 75012 Paris | 🔑 Code : XXXX',
    nation2: '📍 ESGI Nation 2 : 220 rue du Faubourg Saint Antoine, 75012 Paris | 🔑 Code : 38950',
    erard: '📍 ESGI Rue Erard : 19/21 rue Erard, 75012 Paris | 🔑 Code : 2125',
    voltaire1: '📍 STUDIO CREA Voltaire 1 : 1 rue Bouvier, 75011 Paris | 🔑 Code : 2125',
    voltaire2: '📍 EFET Voltaire 2 : 20 rue Bouvier, 75011 Paris | 🔑 Code : XXXX',
    montsouris: '📍 PPA Montsouris : 5 rue Lemaignan, 75014 Paris | 🔑 Code : XXXX',
    jourdan: '📍 PPA Jourdan : 10 boulevard Jourdan, 75014 Paris | 🔑 Code : XXXX',
    ranelagh: '📍 ICAN/ECITV Ranelagh : 64 rue du Ranelagh, 75016 Paris | 🔑 Code : XXXX',
    quai_citroen: '📍 EIML Quai Citroën : 35 quai André Citroën, 75015 Paris | 🔑 Code : XXXX',
    main_dor: '📍 ENGDE Main d\'Or : 8-14 passage de la Main d\'Or, 75011 Paris | 🔑 Code : XXXX',
    rauch: '📍 ENGDE Rauch : 1 passage Rauch, 75011 Paris | 🔑 Code : 2804',
    vaugirard: '📍 ISFJ Vaugirard : 273/277 rue de Vaugirard, 75015 Paris | 🔑 Code : XXXX',
    granges_aux_belles: '📍 ISA/ESIS Granges aux Belles : 39 rue de la Grange aux Belles, 75010 Paris | 🔑 Code : XXXX',
    montrouge: '📍 ESUPCOM/EFFICOM/EFAB/MAESTRIS Montrouge : 13 rue Camille Pelletan, 92120 Montrouge | 🔑 Code : XXXX',
};

const batimentChoices = [
    { name: 'ESGI — Nation 1', value: 'nation1' },
    { name: 'ESGI — Nation 2', value: 'nation2' },
    { name: 'ESGI — Rue Erard', value: 'erard' },
    { name: 'STUDIO CREA — Voltaire 1', value: 'voltaire1' },
    { name: 'EFET — Voltaire 2', value: 'voltaire2' },
    { name: 'PPA — Montsouris', value: 'montsouris' },
    { name: 'PPA — Jourdan', value: 'jourdan' },
    { name: 'ICAN/ECITV — Ranelagh', value: 'ranelagh' },
    { name: 'EIML — Quai Citroën', value: 'quai_citroen' },
    { name: 'ENGDE — Main d\'Or', value: 'main_dor' },
    { name: 'ENGDE — Rauch', value: 'rauch' },
    { name: 'ISFJ — Vaugirard', value: 'vaugirard' },
    { name: 'ISA/ESIS — Granges aux Belles', value: 'granges_aux_belles' },
    { name: 'ESUPCOM/EFFICOM/EFAB/MAESTRIS — Montrouge', value: 'montrouge' },
];

module.exports = { batiments, batimentChoices };
