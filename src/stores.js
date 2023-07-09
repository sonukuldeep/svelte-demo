import { writable } from 'svelte/store';

const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem officia laboriosam qui eligendi, quas iusto reprehenderit asperiores veritatis architecto excepturi incidunt, placeat iure inventore pariatur. Excepturi quia hic similique eveniet?",
    },
    {
        id: 2,
        rating: 9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, recusandae, libero, omnis et voluptatibus voluptatum voluptate ab perspiciatis ut illo ad esse quasi! Odio quae amet vero ad eos iste?",
    },
    {
        id: 3,
        rating: 8,
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio modi blanditiis voluptas saepe veniam? Quia magni neque voluptate soluta rem assumenda totam, nemo sunt ea exercitationem! Aliquam sed saepe earum!",
    },
])

export default FeedbackStore