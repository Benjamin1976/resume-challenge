import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col col-8">
          <h6 className="text-secondary">Resume Challenge Blog</h6>
        </div>
        <div className="col col-4 ">
          <span className="float-end">04 May 2024</span>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <p>
            Firstly, this was a very interesting challenge. Initially, I thought
            ... I've done the courses and a lot of practical hands-on work, so
            this challenge should simple, probably a week or so and I can have
            this completed. Doing practical tasks on individual components is
            great and gives you a lot of experience. But when you need to tie
            all the pieces together in one solution, it gets a bit harder.
          </p>
          <h6 className="text-secondary">Where to Start</h6>
          <p>
            This was the first question I had. I personally love to jump
            straight in and play with the key components, so this is what I did.
            I created a basic resume template, just with some dummy text and
            proceeded to create each of the resources in the AWS Console
            manually. Then I connected all the components, so the website was
            working with S3, Cloudfront, API Gateway, Dynamo DB and Route53.
            Once all the functionalty was working, I started working on the
            automated deployment with the SAM templates.
          </p>
          <h6 className="text-secondary">Key Tips</h6>
          <p>
            <ul>
              <li>Have a plan</li>
              <li>Start off with basic configuration</li>
              <li>Do iterative changes to the templates</li>
              <li>Know when to stop</li>
            </ul>
          </p>
          <h6 className="text-secondary">Have a plan</h6>
          <p>
            While this seems quite obvious and while I actually did have a plan
            in my head, writing down the plan, breaking down each step and what
            was minimally required for each each step, is helpful to keep you on
            the right track, ensure you don't spend too much time on one tasks
            and know when you've completed that task.
          </p>
          <p>
            After manually setting up each component, I spent alot of time on my
            resume, probably too much actually. I updated content, kept changing
            styles, changing formats, refining the code until I got a simple and
            clean layout. While will be beneficial for the long run, it's not
            really the key objective of this challenge.
          </p>
          <h6 className="text-secondary">Start off with basic configuration</h6>
          <p>
            Probably the most time consuming part of this challenge was getting
            the SAM templates to work. Initially I put every option and detail
            into the SAM template for each component based on the AWS website
            reference pages. This caused a lot of issues as some options were
            only required in certain scenarios, some were not required in
            others. Added to this, is that the time to run the SAM template,
            isn't really quick, so waiting each time to see another error,
            chewed up a lot of time. The{" "}
            <i>
              Parameter values specified for a template which does not require
              them
            </i>{" "}
            was the bane of my existence while trying to setup the SAM
            templates.
          </p>
          <p>
            Therefore, what I would suggest, is to create the templates with the
            most minimal functionality / specifications to create the service /
            component. Once you can sucessfully create the service, then add
            more configuration and settings to it, until it is the same setup
            that you manually created in the AWS console. I kept the services I
            created manually as a guide until I could replicate their same
            settings using the SAM templates.
          </p>
          <h6 className="text-secondary">Costs</h6>
          <p>
            Don't worry about costs. With the free tier, the services did not
            use accumulate much costs at all, maybe $2 SGD for the month. The
            only cost that was larger was the domain name I registered. This was
            about $20 but there were much cheaper domain names.
          </p>
          <h6 className="text-secondary">Toughest Components</h6>
          <p>
            <b>API Gateway:</b> became a bit tricky to match the same settings
            through the SAM template that I had used manually. The REST API vs
            the HTTP API required diffent configuration and the CORS setup was
            quite confusing. Easy to setup manually in the console, but through
            the template proved a bit more confusing.
          </p>
          <p>
            <b>SAM Templates:</b> as mentioned above, getting the right
            configuration and settings detailed into the SAM template took up
            quite a bit of time, including the running of the templates
            themselves to find some error on the last component. What I did, in
            addition to creating the minimal configuration was to created nested
            templates for my services. This meant I could execute the template
            for an individual service until I was happy with the setup and then
            run it as a group with all services with minimal changes, really
            only changing the parameters passed from the parent template.
          </p>
          <p>
            <ul>
              <li>
                Parent template - with all key parameters to pass to child
                templates
              </li>
              <ul className="nested">
                <li>Dynamo DB - to store the counter visits</li>
                <li>User Role - for Lambda access to Dynamo DB</li>
                <li>S3 Template - for the S3 bucket and Static website</li>
                <li>
                  Cloudfront Distribution - as the CDN for the website &
                  enforcing SSL
                </li>
                <li>
                  Route 53 CName entry - to point the custom domain to my
                  Cloudfront distribution
                </li>
                <li>
                  Lambda & API Gateway - both were put in the same template
                </li>
              </ul>
            </ul>
          </p>
          <h5 className="text-secondary">Know when to stop</h5>
          <p>
            While this seems like it doesn't need to be said, you can find
            yourself spending hours on some setup or feature that doesn't need
            to be perfect. Knowing what the MVP, minimal viable product for each
            service, is key. Having that MVP definition allows you to know you
            need to build to complete that task. This way you can get the
            overall challenge completed and go back and tweak items later.
          </p>
          <h5 className="text-secondary">In Hindsight</h5>
          <p>
            In hindsight, I don't have too many changes that I would make on how
            I approached this task. I think taking a bit more time to read some
            of the reference pages for the services could have saved some time.
            Instead, alot of times, I just scanned the options list to see what
            seemed the correct option and added it to the template and ran it.
            These templates can take a while to run and during that process,
            apart for tweaking your resume or researching other components
            configuration, you need to wait until the template succeeds of
            fails.
          </p>
          <h5 className="text-secondary">Overview</h5>
          <p>
            This challenge was really a challenge but also very fun, along with
            frustrating, but overall satisfying. It also validates your skills
            and adds another lens on pulling an overall solution together. I'm
            looking forward to do the Azure challenge next and also maybe
            expanding on this AWS challenge but building templates to deploy my
            Resume site via an EC2 instance, a container and then Beanstalk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
