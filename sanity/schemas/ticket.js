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
            name: 'test',
            title: 'test',
            hidden: ({document, value}) => /*!document?.issue == 'break'*/{
                console.log(document?.issue);
            }
            
        },
        {
            type: 'text',
            name: 'description',
            title: 'Description/Information utile',
            validation: Rule => Rule.required()
        }
    ]
}