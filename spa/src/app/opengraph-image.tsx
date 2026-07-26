import { ImageResponse } from "next/og";

export const alt = "Xavier Chopin — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "0 90px",
                    background: "#10101a",
                    color: "#ededed",
                }}
            >
                {/* Blurred accent orb, echoing the gradient blob on the site */}
                <div
                    style={{
                        position: "absolute",
                        top: -160,
                        right: -120,
                        width: 620,
                        height: 620,
                        borderRadius: "50%",
                        background: "linear-gradient(120deg, #60a5fa, #c084fc, #f472b6)",
                        opacity: 0.45,
                        filter: "blur(90px)",
                    }}
                />
                <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
                    Xavier Chopin
                </div>
                <div style={{ display: "flex", fontSize: 40, color: "#a5b4cf", marginTop: 14 }}>
                    Senior Software Engineer
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 27,
                        color: "#7f8ba6",
                        marginTop: 40,
                        maxWidth: 880,
                        lineHeight: 1.4,
                    }}
                >
                    I build systems that scale, survive, and serve — with clean code, resilience, and
                    real impact.
                </div>
            </div>
        ),
        size,
    );
}
