let data = {

    poslodavac: {
        data : [
            {
                id_poslodavca : '234567',
                ime : 'Ivan',
                prezime: 'Ivic',
                godiste: '1983.',
                grad: 'Rijeka',
                drzava: 'Hrvatska',
                kategorija_posla: 'web-stranice IT & softver',
                ostalo: 'Nekakav tekst'
            },
        ]
    },
    jedan_poslodavac : {
        data : {
                id_poslodavca : '234567',
                ime : 'Ivan',
                prezime: 'Ivic',
                godiste: '1983.',
                grad: 'Rijeka',
                drzava: 'Hrvatska',
                kategorija_posla: 'web-stranice IT & softver',
                ostalo: 'Nekakav tekst'
        },
    },
    freelancer: {
        data : [
            {
                id_freelancera: '345678',
                ime : 'Ana',
                prezime: 'Anic',
                godiste: '1989.',
                grad: 'Osijek',
                drzava: 'Hrvatska',
                ostalo: 'o sebi',
                minimalna_satnica: '10$/h',
                vjestine: 'Wordpress, HTML, CSS, JS'
            }
        ]
    },
    jedan_freelancer: {
        data : {
            id_freelancera: '345678',
            ime : 'Ana',
            prezime: 'Anic',
            godiste: '1989',
            grad: 'Osijek',
            drzava: 'Hrvatska',
            ostalo: 'o sebi',
            minimalna_satnica: '10$/h',
            vjestine: 'Wordpress, HTML, CSS, JS'
        },
    },
    posts:{
        data: [
            {
                id_posta : '1234',
                ime : 'Ivan',
                prezime: 'Ivic',
                kategorija_posla: 'web-stranice IT & softver',
                naziv_posla: 'wordpress website',
                zarada: '250$',
                opis_posla: 'pojedinosti o poslu',
                potrebne_vjestine: 'Wordpress, HTML, CSS',
                posted_at: '1576599080230',
                komentar: [
                    {
                        ime : 'Ana',
                        prezime: 'Anic',
                        zarada: '10$/h',
                        tekst: 'Zainteresiran sam za posao. Mogu ga napraviti u tjedan dana.',
                        rok_obavljanja_posla: '7 dana',
                        posted_at: '1576599080230'
                    },
                ]
            },
            {
            id_posta : '2356',
            ime : 'Lucija',
            prezime: 'Lucic',
            kategorija_posla: 'prevođenje i jezici',
            naziv_posla: 'prijevod engleski u portugalski',
            zarada: '30$-250$',
            opis_posla: 'pojedinosti o poslu',
            potrebne_vjestine: 'poznavanje portugalskog i engleskog',
            posted_at: '1576599080230',
            komentar: [
                {
                    ime : 'Marin',
                    prezime: 'Marinic',
                    zarada: '10$/h',
                    tekst: 'Zainteresiran sam za posao.',
                    rok_obavljanja_posla: '2 dana',
                    posted_at: '1576599080230'
                },
            ]
        },
        ]
    },
    jedan_post: {
        data:   
        {
            id_posta : '1234',
            ime : 'Ivan',
            prezime: 'Ivic',
            kategorija_posla: 'web-stranice IT & softver',
            naziv_posla: 'wordpress website',
            zarada: '250$',
            opis_posla: 'pojedinosti o poslu',
            potrebne_vjestine: 'Wordpress, HTML, CSS',
            posted_at: '1576599080230',
            komentar: [
                {
                    ime : 'Ana',
                    prezime: 'Anic',
                    zarada: '10$/h',
                    tekst: 'Zainteresiran sam za posao. Mogu ga napraviti u tjedan dana.',
                    rok_obavljanja_posla: '7 dana',
                    posted_at: '1576599080230'
                },
            ]
        },
    }


}

export default data;