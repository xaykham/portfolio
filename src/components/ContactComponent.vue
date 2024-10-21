<template>
  <div class="dizme_tm_section" id="contact">
    <div class="dizme_tm_contact">
      <div class="container">
        <div class="dizme_tm_main_title" data-align="center">
          <span>Contact Me</span>
          <h3>I Want To Hear From You</h3>
          <p>
            Please fill out the form on this section to contact with me. Or call
            between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
          </p>
        </div>
        <div class="contact_inner">
          <div class="left wow fadeInLeft" data-wow-duration="1s">
            <ul>
              <li>
                <div class="list_inner">
                  <div class="icon orangeBackground">
                    <i class="icon-location orangeText"></i>
                  </div>
                  <div class="short">
                    <h3>Address</h3>
                    <span>Sikhottabong, Vientiane Prefecture, Laos</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="list_inner">
                  <div class="icon orangeBackground">
                    <i class="icon-mail-1 orangeText"></i>
                  </div>
                  <div class="short">
                    <h3>Email</h3>
                    <span><a href="#">xaykham@gmail.com</a></span>
                  </div>
                </div>
              </li>
              <li>
                <div class="list_inner">
                  <div class="icon orangeBackground">
                    <i class="icon-phone orangeText"></i>
                  </div>
                  <div class="short">
                    <h3>Phone</h3>
                    <span>+856 20 2999 5549</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="right wow fadeInRight" data-wow-duration="1s">
            <div class="fields">
              <form
                action="/"
                method="post"
                class="contact_form"
                id="contact_form"
                autocomplete="off"
              >
                <div
                  class="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                ></div>
                <div class="empty_notice">
                  <span>Please Fill Required Fields</span>
                </div>
                <div class="input_list">
                  <ul>
                    <li>
                      <input id="name" type="text" placeholder="Your Name" />
                    </li>
                    <li>
                      <input id="email" type="text" placeholder="Your Email" />
                    </li>
                    <li>
                      <input
                        id="phone"
                        type="number"
                        placeholder="Your Phone"
                      />
                    </li>
                    <li>
                      <input id="subject" type="text" placeholder="Subject" />
                    </li>
                  </ul>
                </div>
                <div class="message_area">
                  <textarea
                    id="message"
                    placeholder="Write your message here"
                  ></textarea>
                </div>
                <div class="dizme_tm_button">
                  <a id="send_message" href="#"><span>Submit Now</span></a>
                </div>
              </form>
            </div>
          </div>
          <div class="brush_2 wow fadeInRight" data-wow-duration="1s">
            <img src="img/brushes/contact/2.png" alt="" />
          </div>
        </div>
        <div class="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="100%"
                height="375"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d869.400563930107!2d102.53575834535164!3d17.988649628621815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312469024745f2b9%3A0x7edb13c72487a9d9!2z4LqK4Lqy4LqN4LqE4LuN4LqyIOC6reC6reC6geC7geC6muC6miBHcmFwaGljIERlc2lnbg!5e0!3m2!1sen!2sla!4v1729516575669!5m2!1sen!2sla"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>

          <!-- Get your API here https://www.embedgooglemap.net -->
        </div>
      </div>
      <div class="brush_1 wow fadeInLeft" data-wow-duration="1s">
        <img src="img/brushes/contact/1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
  components: {},
};
</script>
