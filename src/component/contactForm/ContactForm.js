import Buttons from '../buttons/Buttons';
import { ArrowRight, Enveloppe } from '../svgComponent/SvgComponent';

function ContactForm() {
	return (
		<div>
			<section id="contact" className="form">
				<h1 className="section-title">Contact</h1>
				<div className="form-button">
					<a rel="noreferrer" className="animated-button" href="mailto:elia.kopff3891@gmail.com">
						<Buttons className="animated-button" message={'If you would like to contact me'} SvgRight={ArrowRight} SvgEnvellope={Enveloppe} />
					</a>
				</div>
			</section>
		</div>
	);
}

export default ContactForm;
