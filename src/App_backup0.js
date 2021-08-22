
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )

}

const foodLike = [
  {
    id : 1,
    name : 'kimchi',
    image : 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating : 5.0,
  },
  {
    id : 2,
    name : 'samgyeopsal',
    image : 'https://img.lovepik.com/photo/50160/5503.jpg_wh300.jpg',
    rating : 4.9,
  },
  {
    id : 3,
    name : 'Bibimbap',
    image : 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4v70/image/9QCpfL_QVMHhSjZaXy20dhpCjM4.jpg',
    rating : 4.8,
  },
  {
    id : 4,
    name : 'Doncasu',
    image : 'https://www.ypsori.com/news/photo/201811/14515_14466_1033.jpg',
    rating : 4.5,
  },
  {
    id : 5,
    name : 'Kimbap',
    image : 'https://www.thebilliards.kr/news/photo/202107/11837_14570_187.png',
    rating : 4.9,
  }
];

function App() {
  return (
    <div>
        {foodLike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        ))}
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
};

export default App;