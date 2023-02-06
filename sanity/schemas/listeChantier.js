export default{
    type: 'document',
    name: 'listeChantier',
    title: 'Liste des chantiers',
    fields: [
        {
            type: 'reference',
            name: 'project',
            title: 'Code du projet',
            to: [{type: 'projectCodes'}],
            validation: Rule => Rule.required()
        },
        {
            type: 'string',
            name: 'name',
            title: 'Nom du projet',
            description: 'Inscrire le nom du projet (Généralement la rue du chantier)',
            validation: Rule => Rule.required()
        },
        {
            type: 'reference',
            name: 'foreman',
            title: 'Contremaitre',
            to: [{type: 'employes'}],
            options: {
                filter: "role == 'foreman'"
            },
            validation: Rule => Rule.required()
        },
        {
            type: 'array',
            of: [{ type: 'file'}],
            name: 'plan',
            title: 'Plans du chantier'
        },
        {
            type: 'reference',
            to: [{ type: 'adressList'}],
            name: 'refAdressList'
        }
    ]
}