export default function About() {
  return (
    <main className="min-h-screen gradient-no-grid">
      <h1 className="font-gigaSans flex mx-auto w-fit text-center mt-[140px] py-[10px] px-5 border-y-[1.5px] border-[#D0EFFF] text-[32px] font-semibold relative z-10 heading-text">
        About us
      </h1>
      <div className="font-gigaSans about-container mt-[52px] mb-[100px] p-5 w-[calc(100%_-_32px)] max-w-[992px] mx-auto md:px-[80px] lg:px-[110px] bg-[#D0EFFF] bg-[url('/images/flutter-grid.svg')] bg-blend-multiply border-[0.5px] border-[#1167B1] text-[#03254C] text-sm rounded-2xl relative z-10 space-y-5">
        <p>
          At FlutterBytes Conference, we&rsquo;re dedicated to creating a
          premier event experience that connects professionals, thought leaders,
          and innovators from diverse backgrounds and industries. Our mission is
          to provide a platform for knowledge sharing, collaboration, and
          growth, fostering a community that drives progress and innovation.
        </p>
        <p>
          With a commitment to excellence and a passion for making a meaningful
          impact, our team works tirelessly to curate a comprehensive program,
          secure esteemed Speakers, and create a conducive environment for
          meaningful connections and learning.
        </p>
		<div>
			<p>Our values are:</p>
			<ul>
			<li>
				- Connection: We believe in the power of people coming together to
				achieve great things.
			</li>
			<li>
				- Innovation: We embrace fresh ideas and perspectives that shape the
				future.
			</li>
			<li>
				- Growth: We strive to create opportunities for personal and
				professional development.
			</li>
			<li>
				- Community: We&rsquo;re dedicated to building a supportive and
				inclusive network
			</li>
			</ul>
		</div>
      </div>
    </main>
  );
}
