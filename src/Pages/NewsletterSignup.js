import React from "react";

export const NewsletterSignup = () => {
  return (
    <div
      className="formParent"
      style={{
        display: "flex",
        justifyContent: "center",
        fontFamily: '"Cooper Hewitt", sans-serif',
        width: "100%"
      }}
      dangerouslySetInnerHTML={{
        __html: `<div id="mc_embed_shell" style=" width: 100%; max-width: 600px; ">
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
                    <style type="text/css">
                        #mc_embed_signup{width: 100%; clear:left;}
                        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                        We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                    </style>
                    <div id="mc_embed_signup">
                        <form action="https://berlin.us21.list-manage.com/subscribe/post?u=f11847b7d17cdb680703923c5&amp;id=4412770adb&amp;f_id=001d59e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                        <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
                        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                        <div class="mc-field-group">
                        <label for="mce-FNAME">First Name</label>
                        <input type="text" name="FNAME" class=" text" id="mce-FNAME" value="">
                        <span id="mce-FNAME-HELPERTEXT" class="helper_text">Enter your first name here</span></div>
                        <div class="mc-field-group">
                        <label for="mce-LNAME">Last Name</label>
                        <input type="text" name="LNAME" class=" text" id="mce-LNAME" value="">
                        <span id="mce-LNAME-HELPERTEXT" class="helper_text">Enter your last name here</span>
                    </div>  
                    <div class="mc-field-group">
                        <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
                        <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="">
                        <span id="mce-EMAIL-HELPERTEXT" class="helper_text">Enter your email address here</span>
                    </div>
                    <div id="mce-responses" class="clear foot">
                        <div class="response" id="mce-error-response" style="display: none;"></div>
                        <div class="response" id="mce-success-response" style="display: none;"></div>
                    </div>
                    <div aria-hidden="true" style="position: absolute; left: -5000px;">
                        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                        <input type="text" name="b_f11847b7d17cdb680703923c5_4412770adb" tabindex="-1" value="">
                    </div>
                    <div class="optionalParent">
                        <div class="clear foot">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                    </div>
                </div>
                </div>
                </form>
                </div>
                <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]=EMAIL;ftypes[0]=merge;,fnames[1]=FNAME;ftypes[1]=merge;,fnames[2]=LNAME;ftypes[2]=merge;false}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
    `}}
    ></div>
  );
};

export default NewsletterSignup;
