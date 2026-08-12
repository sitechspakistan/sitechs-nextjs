import BeforeAfterSlider from "./BeforeAfterSlider";

export default function BeforeAfterSection() {
    return (
        <section className="before-after-section">
            <div className="container container-1320">
                <div className="ba-card">
                    <div className="ba-header text-center">
                        <div className="ba-badge">Transformation In Action</div>
                        <h2 className="ba-title">Before &amp; After</h2>
                        <p className="ba-desc">See the impact of our design &amp; development</p>
                    </div>

                    <div className="ba-slider-wrap">
                        <BeforeAfterSlider
                            beforeImage="/assets/uploads/before-after/ct-before.png"
                            afterImage="/assets/uploads/before-after/ct-after.png"
                            beforeAlt="Creative Triplet website before redesign"
                            afterAlt="Creative Triplet website after redesign"
                            beforeLabel="Before"
                            afterLabel="After"
                        />
                        <p className="ba-caption">Creative Triplet — Website Redesign</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
