import TopCSS from '../assets/css/topButton.module.scss';

const TopButton = ({backToTop}) => {
  return (
    <div className={`${TopCSS['top-button']} btn-hover`} onClick={backToTop}></div>
  )
}
export default TopButton;
