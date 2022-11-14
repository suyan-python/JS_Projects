let data = [
    {
        name: 'David',
        age: '30'
    },
    {
        name: 'Harry',
        age: '20'
    },
    {
        name: 'Sara',
        age: '24'
    },
    {
        name: 'Lia',
        age: '26'
    },
    {
        name: 'Lana',
        age: '28'
    },
    {
        name: 'Mia',
        age: '27'
    },
];

const info = document.querySelector('#info')

let details = data.map(function (item)
{
    return (
        '<div>' + item.name + ' ' + 'is' + ' ' + item.age + ' years old' + '</div>'
    )
})

info.innerHTML = details.join('\n')