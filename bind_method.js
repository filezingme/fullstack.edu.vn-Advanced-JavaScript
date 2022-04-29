const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (() => {
	const cars = ['BWM']

	const root = $('#root')
	const input = $('#input')
	const submit = $('#submit')

	return {
		add(car) {
			cars.push(car)
		},
		delete(index) {
			cars.splice(index, 1) //index> vị trí của mảng, 1> xóa 1 phần tử
		},
		render() {
			const html = cars.map((car, index) => `
				<li>
					${car} (${index})
					<span class="delete" data-index="${index}">&times</span>
				</li>
			`)
			.join('')

			root.innerHTML = html
		},
		handleDelete(e) {
			const deleteBtn = e.target.closest('.delete') //kiểm tra chính element đó hoặc cha của nó có chứa class đó hay không
			console.log(deleteBtn)
			if(deleteBtn) {
				const index = deleteBtn.dataset.index
				this.delete(index)
				this.render()
			}
		},
		init() {
			//Handle DOM events
			submit.onclick = () => {
				console.log(1)

				const car = input.value
				this.add(car)
				this.render()

				input.value = null
				input.focus()
			}
			
			root.onclick = this.handleDelete.bind(this)

			this.render()
		}
	}
})();

app.init()