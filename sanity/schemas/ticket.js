export default{
    type: 'document',
    name: 'ticket',
    title: 'Call ticket',
    fields: [
        {
            type: 'string',
            name: 'nom',
            title: 'Nom et prénom',
            validation: Rule => Rule.required()
        },
        {
            type: 'string',
            name: 'adress',
            title: 'Adresse',
            validation: Rule => Rule.required()
        },
        {
            type: 'string',
            name: 'phone',
            title: 'Numéro de téléphone',
            validation: Rule => Rule.required()
        },
        {
            type: 'string',
            name: 'email',
            title: 'Email',
            description: 'Optionel'
        },
        {
            type: 'string',
            name: 'issue',
            title: 'Problème',
            options: {
                list: [
                    {title: 'Fuite/Bris', value: 'break'},
                    {title: "Pas d'eau", value: 'nowater'},
                    {title: 'Signalisation', value: 'signalisation'},
                    {title: 'Question générale', value: 'question'},
                    {title: 'Plainte', value: 'complaint'},
                    {title: 'Autre', value: 'other'}
                ]
            },
            validation: Rule => Rule.required()
        },
        {
            type: 'string',
            name: 'issueBreakOptions',
            title: 'Précision du bris',
            options: {
                list: [
                    {title: 'Blanc 1/2"', value: 'white'},
                    {title: 'Bleu 2" 1/2', value: 'blue'},
                    {title: 'Jaune 6"', value: 'yellow'},
                    {title: 'Excavation', value: 'excavation'},
                    {title: 'Autre', value: 'other'}
                ]
            },
            hidden: ({ document }) => document.issue !== 'break'
        },
        {
            type: 'string',
            name: 'issueNoWaterOptions',
            title: 'Précision du problème',
            options: {
                list: [
                    {title: 'Hose déconnectée', value: 'disconnected'},
                    {title: 'Autre', value: 'other'}
                ]
            },
            hidden: ({ document }) => document.issue !== 'nowater'
        },
        {
            type: 'text',
            name: 'description',
            title: 'Description/Information utile',
            validation: Rule => Rule.required()
        },
        {
            type: 'string',
            name: 'status',
            title: 'Statut du ticket',
            description: "Invisible pour l'appelant. Ne pas changer ici à moins de problème dans l'app.",
            options: {
                list: [
                    {title: 'Nouveau', value: 'new'},
                    {title: 'En cours', value: 'ongoing'},
                    {title: 'Terminé', value: 'finished'}
                ]
            }
        }
    ]
}