import { WrapperContainer } from "../../../App-styled";
import styled from "./style.module.css";
import img from "../../../assets/cards/news.png";
import cardImg from "../../../assets/cards/cardNews.png";
import miniImg from "../../../assets/cards/mini.png";

function Cards() {
  return (
    <>
      <div className={styled.WrapperBack}>
        <WrapperContainer>
          <div className={styled.Wrapper}>
            <div className={styled.bigcards}>
              <img className={styled.comp} src={img} alt="photo" />
              <img className={styled.media} src={cardImg} alt="photo" />
              <div className={styled.Texts}>
                <div className={styled.HeaderTexts}>
                  <p>News</p>
                  <h3>
                    Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis
                  </h3>
                </div>
                <div className={styled.date}>
                  <h3>24 Feb, 2023</h3>
                  <p>Coventry</p>
                </div>
              </div>
            </div>
            <div className={styled.avaregeCards}>
              <div className={styled.card}>
                <img src={cardImg} alt="photo" />
                <div className={styled.texts}>
                  <div className={styled.cardtexts}>
                    <p>News</p>
                    <h3>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis{" "}
                    </h3>
                  </div>
                  <div className={styled.cardDate}>
                    <h3>24 Feb, 2023</h3>
                    <p>Coventry</p>
                  </div>
                </div>
              </div>
              <div className={styled.card}>
                <img src={cardImg} alt="photo" />
                <div className={styled.texts}>
                  <div className={styled.cardtexts}>
                    <p>News</p>
                    <h3>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis{" "}
                    </h3>
                  </div>
                  <div className={styled.cardDate}>
                    <h3>24 Feb, 2023</h3>
                    <p>Coventry</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styled.miniCards}>
              <div className={styled.minicard}>
                <div className={styled.mtexts}>
                  <img src={miniImg} alt="photo" />
                  <div className={styled.mcardtexts}>
                    <p>News</p>
                    <h3>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis{" "}
                    </h3>
                  </div>
                  <div className={styled.mcardDate}>
                    <h3>24 Feb, 2023</h3>
                    <p>Coventry</p>
                  </div>
                </div>
              </div>
              <div className={styled.minicard}>
                <div className={styled.mtexts}>
                  <img src={miniImg} alt="photo" />
                  <div className={styled.mcardtexts}>
                    <p>News</p>
                    <h3>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis{" "}
                    </h3>
                  </div>
                  <div className={styled.mcardDate}>
                    <h3>24 Feb, 2023</h3>
                    <p>Coventry</p>
                  </div>
                </div>
              </div>
              <div className={styled.minicard}>
                <div className={styled.mtexts}>
                  <img src={miniImg} alt="photo" />
                  <div className={styled.mcardtexts}>
                    <p>News</p>
                    <h3>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis{" "}
                    </h3>
                  </div>
                  <div className={styled.mcardDate}>
                    <h3>24 Feb, 2023</h3>
                    <p>Coventry</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styled.MediaCards}>
              <div className={styled.mediaCard}>
                <img className={styled.media} src={cardImg} alt="photo" />
                <div className={styled.MediaTexts}>
                  <div className={styled.MediaHeaderTexts}>
                    <p>News</p>
                    <h3>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis
                    </h3>
                  </div>
                  <div className={styled.Mediadate}>
                    <h3>24 Feb, 2023</h3>
                    <p>Coventry</p>
                  </div>
                </div>
              </div>

              <div className={styled.mediaCard}>
                <img className={styled.media} src={cardImg} alt="photo" />
                <div className={styled.MediaTexts}>
                  <div className={styled.MediaHeaderTexts}>
                    <p>News</p>
                    <h3>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis
                    </h3>
                  </div>
                  <div className={styled.Mediadate}>
                    <h3>24 Feb, 2023</h3>
                    <p>Coventry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
}

export default Cards;
