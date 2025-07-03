import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Zap, Star } from 'lucide-react';

const Contact = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pip69bj',
      'template_ihk5184',
      formRef.current,
      'UlF4rzpqcPG7w406r' // Replace this
    )
    .then(() => {
      setSubmitted(true);
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
            <span className="text-sm font-bold text-gray-800">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900">
            Partner <span className="gradient-text">With Us</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Ready to <span className="text-blue-600 font-bold">unlock new revenue streams?</span> Let's discuss how Mobtions can help grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          {/* ... (your existing contact info cards remain unchanged) ... */}

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-2xl hover:shadow-3xl group overflow-hidden">
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</CardTitle>
                <p className="text-gray-700 text-lg font-medium">
                  Tell us about your business and how we can <span className="text-blue-600 font-bold">work together</span>
                </p>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">🎉 Thank you!</h3>
                    <p className="text-gray-700 text-lg">We've received your message. We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-base font-bold mb-2 block text-gray-800">Name</label>
                        <Input name="name" placeholder="Your full name" required className="border-2 border-gray-300 focus:border-blue-500 text-gray-800 font-medium py-3" />
                      </div>
                      <div>
                        <label className="text-base font-bold mb-2 block text-gray-800">Email</label>
                        <Input name="email" type="email" placeholder="your@email.com" required className="border-2 border-gray-300 focus:border-blue-500 text-gray-800 font-medium py-3" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="text-base font-bold mb-2 block text-gray-800">Company</label>
                        <Input name="company" placeholder="Your company name" className="border-2 border-gray-300 focus:border-blue-500 text-gray-800 font-medium py-3" />
                      </div>
                      <div>
                        <label className="text-base font-bold mb-2 block text-gray-800">Whatsapp Number</label>
                        <Input name="whatsapp" placeholder="Your Whatsapp Number" className="border-2 border-gray-300 focus:border-blue-500 text-gray-800 font-medium py-3" />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="text-base font-bold mb-2 block text-gray-800">Message</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your business goals and how we can help..."
                        rows={6}
                        required
                        className="border-2 border-gray-300 focus:border-blue-500 text-gray-800 font-medium"
                      />
                    </div>

                    <Button type="submit" className="mt-6 w-full btn-gradient text-white text-xl py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300">
                      <Zap className="mr-2 h-6 w-6" />
                      Send Message
                      <Send className="ml-2 h-6 w-6" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
