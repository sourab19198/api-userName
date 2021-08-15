const users = document.querySelector('#users');
const input = document.querySelector('input');
let page_no = 2;

input.addEventListener('change', () => {

    page_no = input.value;
    console.log(page_no);

    const page = async () => {
        try {
            const res = await axios.get(`https://reqres.in/api/users?page=${page_no}`);

            let d = res.data.data;
            for (let i = 0; i < d.length; i++) {

                let first = d[i].first_name;
                let last = d[i].last_name;
                let full_name = first + ' ' + last;
                let h3 = document.createElement('h3');
                h3.innerText = full_name;
                users.append(h3);

            }
        } catch (er) {
            alert('some error occured');
        }
    }

    page();


})



