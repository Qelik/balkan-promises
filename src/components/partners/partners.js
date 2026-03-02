import './partners.css';
import uefa from '../../assets/images/uefa.webp';
import ohri from '../../assets/images/bashkiaOher.webp';
import fairPlay from '../../assets/images/fairplay.webp';

const Partner = () => {
    return (
        <>
            <div className='partner-img-holder'>
                <img src={uefa} alt='UEFA' />
                <img src={ohri} alt='OHRI' />
                <img src={fairPlay} alt='Fair Play' />
            </div>
        </>
    );
};

export default Partner;
