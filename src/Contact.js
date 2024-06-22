import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (<Wrapper>
    <h2 className="common-heading"> Contact Page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6337906796107!2d72.54960017350813!3d23.03721461578506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f368a87e9b%3A0x4404c5fac85ee456!2sSchool%20of%20Engineering%20and%20Applied%20Science!5e0!3m2!1sen!2sin!4v1719043548071!5m2!1sen!2sin" width="90%" height="400" style={{ border: 0 }} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        {/* Using formspree */}
        <form action="https://formspree.io/f/mldrrjbb" method="post" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off" />
          <input type="email" name="email" placeholder="Email" autoComplete="off" required></input>

          <textarea name="message" cols={30} rows={10} required autoComplete="off" placeholder="Enter Your Message"></textarea>

          <input type="submit" value={"submit"} />
        </form>
      </div>
    </div>
  </Wrapper>);
};

export default Contact;
