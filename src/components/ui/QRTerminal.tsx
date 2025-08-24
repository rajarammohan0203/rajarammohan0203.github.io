import React from "react";

interface QRCodeTerminalProps {
  text: string;
}

const QRCodeTerminal: React.FC<QRCodeTerminalProps> = ({ text }) => {
  const generateQRCode = (text: string): string => `
█████████████████████████████████████
█████████████████████████████████████
████ ▄▄▄▄▄ █ ▄▄ █▄ █▀█▄█▀█ ▄▄▄▄▄ ████
████ █   █ ██▄█▀▀ █ █ ▀███ █   █ ████
████ █▄▄▄█ █ ▀▀▄ ▀ █▀▄▀███ █▄▄▄█ ████
████▄▄▄▄▄▄▄█ ▀▄█▄█▄█ █▄▀ █▄▄▄▄▄▄▄████
████ ▄ ▀█ ▄▀▄▄█▄ █▀ ▀▀█▀▄▄  ▄██  ████
████▀██▀▀█▄█ ▄ ▀ ▄▄ █▄▄▄█ ▄██ ▄█▄████
█████ █▀█▄▄▄ ▄ ████ ▀█▀  █ ▀███▀ ████
████▀ ▀█▀▀▄ █▀▀▄█▄█▄▀▄▀ ▄█ ▀▄███▄████
████▄█▀▀▄█▄▄  ▀▄ ██  ██▀▀█ ▀██▀▀ ████
████▄▄█ ██▄▀▄▄▀▀ ██ ▄█▄▄▀ ▀▀▀▄██▄████
████▄▄██▄▄▄▄  ███ ▄ ▀▀▄█ ▄▄▄  ▀▄▀████
████ ▄▄▄▄▄ █▀▄ ▄█▀█ ▀██▀ █▄█ ██▀▄████
████ █   █ ███▀▄ ▄█▀▄▀█ ▄ ▄▄  ▀▄▀████
████ █▄▄▄█ █ ▄▄▀ ▄  ▀▄ ▄ ▄▀▀▄▀█▄▄████
████▄▄▄▄▄▄▄█▄▄▄██▄▄█▄███▄▄▄▄████▄████
█████████████████████████████████████
█████████████████████████████████████

📱 QR Code for: ${text}

⚡ Scan with mobile device
📎 Or use direct link above
`;

  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "#0f0",
        padding: "20px",
        borderRadius: "8px",
        fontFamily: "monospace",
        fontSize: "14px",
        lineHeight: "1.2",
        overflowX: "auto",
      }}
    >
      <pre style={{ whiteSpace: "pre", margin: 0 }}>{generateQRCode(text)}</pre>
    </div>
  );
};

export default QRCodeTerminal;
