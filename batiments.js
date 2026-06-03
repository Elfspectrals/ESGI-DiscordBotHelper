function googleMapsUrl(address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function formatMessage(label, address, code) {
    const mapsUrl = googleMapsUrl(address);
    return `📍 ${label} : [${address}](${mapsUrl}) | 🔑 Code : ${code}`;
}

const batimentsData = [
    { key: 'nation1', label: 'ESGI Nation 1', address: '242 rue du Faubourg Saint Antoine, 75012 Paris', code: 'XXXX' },
    { key: 'nation2', label: 'ESGI Nation 2', address: '220 rue du Faubourg Saint Antoine, 75012 Paris', code: '38950' },
    { key: 'erard', label: 'ESGI Rue Erard', address: '19/21 rue Erard, 75012 Paris', code: '2125' },
    { key: 'voltaire1', label: 'STUDIO CREA Voltaire 1', address: '1 rue Bouvier, 75011 Paris', code: '2125' },
    { key: 'voltaire2', label: 'EFET Voltaire 2', address: '20 rue Bouvier, 75011 Paris', code: 'XXXX' },
    { key: 'montsouris', label: 'PPA Montsouris', address: '5 rue Lemaignan, 75014 Paris', code: 'XXXX' },
    { key: 'jourdan', label: 'PPA Jourdan', address: '10 boulevard Jourdan, 75014 Paris', code: 'XXXX' },
    { key: 'ranelagh', label: 'ICAN/ECITV Ranelagh', address: '64 rue du Ranelagh, 75016 Paris', code: 'XXXX' },
    { key: 'quai_citroen', label: 'EIML Quai Citroën', address: '35 quai André Citroën, 75015 Paris', code: 'XXXX' },
    { key: 'main_dor', label: 'ENGDE Main d\'Or', address: '8-14 passage de la Main d\'Or, 75011 Paris', code: 'XXXX' },
    { key: 'rauch', label: 'ENGDE Rauch', address: '1 passage Rauch, 75011 Paris', code: '2804' },
    { key: 'vaugirard', label: 'ISFJ Vaugirard', address: '273/277 rue de Vaugirard, 75015 Paris', code: 'XXXX' },
    { key: 'granges_aux_belles', label: 'ISA/ESIS Granges aux Belles', address: '39 rue de la Grange aux Belles, 75010 Paris', code: 'XXXX' },
    { key: 'montrouge', label: 'ESUPCOM/EFFICOM/EFAB/MAESTRIS Montrouge', address: '13 rue Camille Pelletan, 92120 Montrouge', code: 'XXXX' },
];

const batiments = Object.fromEntries(
    batimentsData.map(({ key, label, address, code }) => [key, formatMessage(label, address, code)]),
);

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
