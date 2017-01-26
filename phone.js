const app = {
	tr: document.createElement('tr'),
	title: [
	{th: 'FirstName'},
	{th: 'SecondName'},
	{th: 'Mail'}
	],
	personalInformation: [
	{firstName: 'Иван', surName: 'Николайчук', email: 'ivan@example.com'},
	{firstName: 'Юлия', surName: 'Петренко', email: 'julia@example.com'},
	{firstName: 'Иван', surName: 'Николайчук', email: 'ivan@example.com'},
	{firstName: 'Мария', surName: 'Иванова', email: 'mary@example.com'},
	{firstName: 'Юлия', surName: 'Петренко', email: 'julia@example.com'},
	{firstName: 'Иван', surName: 'Николайчук', email: 'ivan@example.com'},
	{firstName: 'Мария', surName: 'Иванова', email: 'mary@example.com'},
	{firstName: 'Юлия', surName: 'Петренко', email: 'julia@example.com'},
	{firstName: 'Иван', surName: 'Николайчук', email: 'ivan@example.com'},
	{firstName: 'Мария', surName: 'Иванова', email: 'mary@example.com'},
	{firstName: 'Юлия', surName: 'Петренко', email: 'julia@example.com'}
	],

	 render() {
	 	const body = document.body;
	 	const main = this.new('main');
	 	const table = this.new('table');
	 	const thead = this.new('thead');
	 	const tbody = this.new('tbody');
	 	const input = this.new('input');
	 	input.setAttribute('type', 'search');
	 	input.placeholder = 'Last & second name';
	 	const buttonFind = this.new('button');
	 	const buttonAdd = this.new('button');
	 	buttonFind.textContent = 'Find';
		buttonAdd.textContent = 'Add user';
	 	


	 	this.title.forEach(titles => {
	 		const thHeaderTitle = titles.th;
	 		const th = this.new('th');
	 		th.textContent = thHeaderTitle;
	 		this.tr.append(th);
	 	
	 	this.personalInformation.forEach(row => {
	 		const name = row.firstName;
	 		const secondName = row.surName;
	 		const mail = row.email;
	 		const trBody = this.new('tr');
	 		const tdName = this.new('td');
	 		const tdSurName = this.new('td');
	 		const tdMail = this.new('td');
	 		tdName.textContent = name;
	 		tdSurName.textContent = secondName;
	 		tdMail.textContent = mail;

	 		// td.textContent = secondName;
	 		
	 		
	 		tbody.append(trBody);
	 		trBody.append(tdName);
	 		trBody.append(tdSurName);
	 		trBody.append(tdMail);


	 	})
	 });
		main.append(input);
		main.append(buttonFind);
		main.append(buttonAdd);
	 	main.append(table);
	 	table.append(thead);
	 	table.append(tbody);
	 	thead.append(this.tr);
	 	body.append(main);
	 },

	 new(elemName) {
	 	return document.createElement(elemName);
	 }
}
app.render();