export default{
    type: 'document',
    name: 'adressList',
    title: "Liste d'adresse",
    fields: [
        {
            type: 'reference',
            to: [{ type: 'listeChantier'}],
            name: 'refListeChantier',
            title: 'Chantier',
            validation: Rule => Rule.required()
        },
        {
            type: 'array',
            name: 'building',
            title: 'Maison/Batisse',
            of: [{
                type: 'object',
                fields: [
                    {type: 'string', name: 'adress', title: 'Adresse/No Civique', validation: Rule => Rule.required()},
                    {type: 'string', name: 'buildingType', title: 'Type de batiment', options: {list: [{title: 'Maison/Appartement', value: 'house'}, {title: 'Industriel/Commercial', value: 'industrial'}]}, validation: Rule => Rule.required()},
                    {type: 'boolean', name: 'pluggedStatus', title: 'Branchement fait?', initialValue: false, validation: Rule => Rule.required()},
                    {type: 'string', name: 'plugType', title: 'Branchement direct/régulier', options: {list: [{title: 'Direct', value: 'direct'}, {title: 'Régulier', value: 'regular'}]}, validation: Rule => Rule.required()},
                    {
                        type: 'object',
                        name: 'regularOptions',
                        fields: [
                            {type: 'boolean', name: 'bonhommeStatus', title: 'Statut du bonhomme', initialValue: false},
                            {type: 'boolean', name: 'mainStatus', title: 'Statut du main', initialValue: false},
                            {
                                type: 'object',
                                name: 'debitPression',
                                fields: [
                                    {type: 'number', name: 'debitValue', title: 'Débit'},
                                    {type: 'number', name: 'pressionValue', title: 'Pression'}
                                ]
                            },
                            {type: 'number', name: 'hoseAmount', title: 'Nombre de hose',},
                            {type: 'boolean', name: 'antigel', title: 'Antigel?', initialValue: false}
                        ],
                        hidden: ({ parent }) => parent.plugType !== 'regular'
                    },
                    {type: 'text', name: 'comments', title: 'Commentaire aditionnel'}
                ]
            }]
        }
    ]
}