const para = document.getElementById('para1');
const para2 = document.getElementById('para2');
const heading = document.getElementById('heading');
const items = document.getElementsByClassName('item');


function check(col) {
    if (para.style.display === 'block') {
        para.style.display = 'none';
        para2.style.display = 'none';
        heading.style.display = 'none';

    }
    else {
        para.style.display = 'block';
        para2.style.display = 'block';
        heading.style.display = 'block';
    }
}

function funcl(col) {

    heading.innerHTML = "London";
    para.innerHTML = "London is the capital of England";
    para2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis corporis deleniti, voluptatum recusandae, mollitia cum, repellendus blanditiis excepturi molestias officia. Aperiam tenetur non alias? Doloremque sit quia nostrum obcaecati, vero soluta facilis voluptatibus cupiditate qui! Animi repudiandae iste facere odit a corrupti blanditiis, provident laudantium sit incidunt ullam minima libero dicta aut tempora ducimus adipisci quos accusamus molestias ex alias! Quod natus minus vitae deserunt incidunt? Minima, voluptate aut? Unde non corporis perspiciatis iste mollitia eius! Aliquam tenetur itaque inventore animi debitis veniam in ipsam deleniti voluptatibus, quia aperiam, amet impedit. Ab labore, corporis ullam voluptatum accusantium totam similique?";
    check(col);
}


function funcp(col) {


    heading.innerHTML = "Paris";
    para.innerHTML = "Paris is the capital of France";
    para2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis corporis deleniti, voluptatum recusandae, mollitia cum, repellendus blanditiis excepturi molestias officia. Aperiam tenetur non alias? Doloremque sit quia nostrum obcaecati, vero soluta facilis voluptatibus cupiditate qui! Animi repudiandae iste facere odit a corrupti blanditiis, provident laudantium sit incidunt ullam minima libero dicta aut tempora ducimus adipisci quos accusamus molestias ex alias! Quod natus minus vitae deserunt incidunt? Minima, voluptate aut? Unde non corporis perspiciatis iste mollitia eius! Aliquam tenetur itaque inventore animi debitis veniam in ipsam deleniti voluptatibus, quia aperiam, amet impedit. Ab labore, corporis ullam voluptatum accusantium totam similique?";
    check(col);
}

function funct(col) {

    heading.innerHTML = "Tokyo";
    para.innerHTML = "Tokyo is the capital of Japan";
    para2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reiciendis corporis deleniti, voluptatum recusandae, mollitia cum, repellendus blanditiis excepturi molestias officia. Aperiam tenetur non alias? Doloremque sit quia nostrum obcaecati, vero soluta facilis voluptatibus cupiditate qui! Animi repudiandae iste facere odit a corrupti blanditiis, provident laudantium sit incidunt ullam minima libero dicta aut tempora ducimus adipisci quos accusamus molestias ex alias! Quod natus minus vitae deserunt incidunt? Minima, voluptate aut? Unde non corporis perspiciatis iste mollitia eius! Aliquam tenetur itaque inventore animi debitis veniam in ipsam deleniti voluptatibus, quia aperiam, amet impedit. Ab labore, corporis ullam voluptatum accusantium totam similique?";
    check(col);
}