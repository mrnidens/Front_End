let group = {
    title: 'Cohort 34.1',
    students: ['Iryna', 'Kateryna', 'Marina', 'Oksana', 'Tatiana'],
    showList: function () {
        const show = (name) => {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}
console.log(group);
//Unmodified
group.showList();
const newGroup = group;
group = null;
console.log('=====================');
newGroup.showList();