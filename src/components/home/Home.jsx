import React from 'react';
import MovieList from '../../common/MovieList/MovieList';

export default class Home extends React.PureComponent {

	constructor() {
		super();
		this.state = {
			movies: [{
				"adult": false,
				"backdrop_path": "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
				"genre_ids": [28, 12, 878],
				"id": 299537,
				"original_language": "en",
				"original_title": "Captain Marvel",
				"overview": "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
				"poster_path": "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
				"release_date": "2019-03-06",
				"title": "Captain Marvel",
				"video": false,
				"vote_average": 7.0,
				"vote_count": 5804,
				"popularity": 154.382
			}, {
				"adult": false,
				"backdrop_path": "/5tFt6iuGnKapHl5tw0X0cKcnuVo.jpg",
				"genre_ids": [12, 10751, 14],
				"id": 329996,
				"original_language": "en",
				"original_title": "Dumbo",
				"overview": "A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.",
				"poster_path": "/279PwJAcelI4VuBtdzrZASqDPQr.jpg",
				"release_date": "2019-03-27",
				"title": "Dumbo",
				"video": false,
				"vote_average": 6.5,
				"vote_count": 1291,
				"popularity": 121.014
			}, {
				"id": 514999,
				"video": false,
				"vote_count": 436,
				"vote_average": 6.6,
				"title": "Murder Mystery",
				"release_date": "2019-06-14",
				"original_language": "en",
				"original_title": "Murder Mystery",
				"genre_ids": [28, 35, 80, 9648],
				"backdrop_path": "/qeFO3u2IqbAeIT1Xgo6POqYbCaQ.jpg",
				"adult": false,
				"overview": "After attending a gathering on a billionaire's yacht during a European vacation, a New York cop and his wife become prime suspects when he's murdered.",
				"poster_path": "/bSMSO9xupd4R4vwTPqigHn2quLN.jpg",
				"popularity": 123.196
			}, {
				"adult": false,
				"backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
				"genre_ids": [12, 878, 28],
				"id": 299534,
				"original_language": "en",
				"original_title": "Avengers: Endgame",
				"overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
				"poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
				"release_date": "2019-04-24",
				"title": "Avengers: Endgame",
				"video": false,
				"vote_average": 8.4,
				"vote_count": 7021,
				"popularity": 101.439
			}, {
				"adult": false,
				"backdrop_path": "/AiG8iWpFtFSXAdhStWu6qBaqmv9.jpg",
				"genre_ids": [53, 27],
				"id": 458723,
				"original_language": "en",
				"original_title": "Us",
				"overview": "Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.",
				"poster_path": "/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
				"release_date": "2019-03-14",
				"title": "Us",
				"video": false,
				"vote_average": 7.1,
				"vote_count": 1801,
				"popularity": 72.376
			}, {
				"adult": false,
				"backdrop_path": "/nDP33LmQwNsnPv29GQazz59HjJI.jpg",
				"genre_ids": [9648, 10751, 35, 878, 28, 12],
				"id": 447404,
				"original_language": "en",
				"original_title": "Pokémon Detective Pikachu",
				"overview": "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
				"poster_path": "/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
				"release_date": "2019-05-03",
				"title": "Pokémon Detective Pikachu",
				"video": false,
				"vote_average": 7.0,
				"vote_count": 1373,
				"popularity": 72.594
			}, {
				"adult": false,
				"backdrop_path": "/kmPnDn9mbjD9Vzn1FTclNiSHGNa.jpg",
				"genre_ids": [53, 878],
				"id": 505948,
				"original_language": "en",
				"original_title": "I Am Mother",
				"overview": "A teenage girl is raised underground by a robot \"Mother\", designed to repopulate the earth following an extinction event. But their unique bond is threatened when an inexplicable stranger arrives with alarming news.",
				"poster_path": "/eItrj5GcjvCI3oD3bIcz1A2IL9t.jpg",
				"release_date": "2019-06-07",
				"title": "I Am Mother",
				"video": false,
				"vote_average": 6.6,
				"vote_count": 392,
				"popularity": 62.438
			}, {
				"id": 479455,
				"video": false,
				"vote_count": 200,
				"vote_average": 6.2,
				"title": "Men in Black: International",
				"release_date": "2019-06-12",
				"original_language": "en",
				"original_title": "Men in Black: International",
				"genre_ids": [28, 12, 35, 878],
				"backdrop_path": "/2FYzxgLNuNVwncilzUeCGbOQzP7.jpg",
				"adult": false,
				"overview": "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization.",
				"poster_path": "/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg",
				"popularity": 196.081
			}, {
				"adult": false,
				"backdrop_path": "/lFwykSz3Ykj1Q3JXJURnGUTNf1o.jpg",
				"genre_ids": [16, 10751, 12],
				"id": 166428,
				"original_language": "en",
				"original_title": "How to Train Your Dragon: The Hidden World",
				"overview": "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
				"poster_path": "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
				"release_date": "2019-01-03",
				"title": "How to Train Your Dragon: The Hidden World",
				"video": false,
				"vote_average": 7.6,
				"vote_count": 2082,
				"popularity": 65.905
			}, {
				"id": 301528,
				"video": false,
				"vote_count": 45,
				"vote_average": 6.1,
				"title": "Toy Story 4",
				"release_date": "2019-06-19",
				"original_language": "en",
				"original_title": "Toy Story 4",
				"genre_ids": [12, 16, 35, 10751],
				"backdrop_path": "/p3lkc1fDBeX9ZiIQVwRtOnXYENL.jpg",
				"adult": false,
				"overview": "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.",
				"poster_path": "/crvO4xm2gs5W0joyKmJf1l1ThZV.jpg",
				"popularity": 172.038
			}, {
				"id": 320288,
				"video": false,
				"vote_count": 816,
				"vote_average": 6.3,
				"title": "Dark Phoenix",
				"release_date": "2019-06-05",
				"original_language": "en",
				"original_title": "Dark Phoenix",
				"genre_ids": [28, 878],
				"backdrop_path": "/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg",
				"adult": false,
				"overview": "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
				"poster_path": "/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg",
				"popularity": 257.366
			}, {
				"id": 416144,
				"video": false,
				"vote_count": 135,
				"vote_average": 7.2,
				"title": "Hotel Mumbai",
				"release_date": "2019-03-14",
				"original_language": "en",
				"original_title": "Hotel Mumbai",
				"genre_ids": [18, 53],
				"backdrop_path": "/tdVYVR4nIIcmpL0zl39cBfix7Un.jpg",
				"adult": false,
				"overview": "The true story of the 2008 Taj Mahal Palace Hotel terrorist attack in Mumbai when hotel staff risked their lives to keep everyone safe, and as people make unthinkable sacrifices to protect themselves and their families.",
				"poster_path": "/v32SC4HFZtlDRWXMaR2V2dWqAXJ.jpg",
				"popularity": 57.602
			}, {
				"id": 400157,
				"video": false,
				"vote_count": 125,
				"vote_average": 6.0,
				"title": "Wonder Park",
				"release_date": "2019-03-14",
				"original_language": "en",
				"original_title": "Wonder Park",
				"genre_ids": [12, 16, 35, 14, 10751],
				"backdrop_path": "/nJyAdKPnW15IAvC6sLBTE0lp6Dv.jpg",
				"adult": false,
				"overview": "The story of a magnificent amusement park where the imagination of a wildly creative girl named June comes alive.",
				"poster_path": "/8KomINZhIuJeB4oB7k7tkq8tmE.jpg",
				"popularity": 46.759
			}, {
				"adult": false,
				"backdrop_path": "/j2iZourlSz3vlUyfE2LHOveZzDi.jpg",
				"genre_ids": [18, 10749, 10752],
				"id": 433502,
				"original_language": "en",
				"original_title": "The Aftermath",
				"overview": "In the aftermath of World War II, a British colonel and his wife are assigned to live in Hamburg during the post-war reconstruction, but tensions arise with the German widower who lives with them.",
				"poster_path": "/slGZ8miznmAZAaDHEz6BKo7f1N5.jpg",
				"release_date": "2019-03-01",
				"title": "The Aftermath",
				"video": false,
				"vote_average": 6.3,
				"vote_count": 67,
				"popularity": 42.78
			}, {
				"id": 420817,
				"video": false,
				"vote_count": 1697,
				"vote_average": 7.2,
				"title": "Aladdin",
				"release_date": "2019-05-22",
				"original_language": "en",
				"original_title": "Aladdin",
				"genre_ids": [12, 35, 14, 10749, 10751],
				"backdrop_path": "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
				"adult": false,
				"overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
				"poster_path": "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
				"popularity": 159.124
			}, {
				"adult": false,
				"backdrop_path": "/6IZ84KFhNpy6htsJmwFVuK30pyp.jpg",
				"genre_ids": [53, 878],
				"id": 429471,
				"original_language": "en",
				"original_title": "Captive State",
				"overview": "Nearly a decade after occupation by an extraterrestrial force, the lives of a Chicago neighborhood on both sides of the conflict are explored.",
				"poster_path": "/cVo7lylXAUDGuvDZBUYaP8Zjbku.jpg",
				"release_date": "2019-03-15",
				"title": "Captive State",
				"video": false,
				"vote_average": 5.1,
				"vote_count": 197,
				"popularity": 46.861
			}, {
				"id": 373571,
				"video": false,
				"vote_count": 600,
				"vote_average": 6.4,
				"title": "Godzilla: King of the Monsters",
				"release_date": "2019-05-29",
				"original_language": "en",
				"original_title": "Godzilla: King of the Monsters",
				"genre_ids": [28, 878, 53],
				"backdrop_path": "/uovH5k4BAEPqXqxgwVrTtqH169g.jpg",
				"adult": false,
				"overview": "The new story follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species—thought to be mere myths—rise again, they all vie for supremacy, leaving humanity’s very existence hanging in the balance.",
				"poster_path": "/pU3bnutJU91u3b4IeRPQTOP8jhV.jpg",
				"popularity": 89.293
			}, {
				"id": 450465,
				"video": false,
				"vote_count": 3249,
				"vote_average": 6.5,
				"title": "Glass",
				"release_date": "2019-01-16",
				"original_language": "en",
				"original_title": "Glass",
				"genre_ids": [18, 9648, 53],
				"backdrop_path": "/rL1ITQuX0lmSNPu52pRRHUyim5N.jpg",
				"adult": false,
				"overview": "In a series of escalating encounters, former security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.",
				"poster_path": "/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
				"popularity": 47.211
			}, {
				"adult": false,
				"backdrop_path": "/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg",
				"genre_ids": [28, 12, 14],
				"id": 297802,
				"original_language": "en",
				"original_title": "Aquaman",
				"overview": "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
				"poster_path": "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
				"release_date": "2018-12-07",
				"title": "Aquaman",
				"video": false,
				"vote_average": 6.8,
				"vote_count": 6218,
				"popularity": 35.737
			}, {
				"adult": false,
				"backdrop_path": "/d7wa3VpUpKDQ7GG9EMw8zSJCFoI.jpg",
				"genre_ids": [10749, 18],
				"id": 527641,
				"original_language": "en",
				"original_title": "Five Feet Apart",
				"overview": "Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control -- all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness. There's an instant flirtation, though restrictions dictate that they must maintain a safe distance between them. As their connection intensifies, so does the temptation to throw the rules out the window and embrace that attraction.",
				"poster_path": "/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg",
				"release_date": "2019-03-15",
				"title": "Five Feet Apart",
				"video": false,
				"vote_average": 8.1,
				"vote_count": 766,
				"popularity": 51.9
			}]
		}
	}

	render() {
		const {movie} = this.state;
		return (
			<MovieList movies={movie}/>
		);
	}
}