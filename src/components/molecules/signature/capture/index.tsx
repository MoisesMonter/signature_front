import React, { useRef } from 'react';
import { View, StyleSheet, Button, Alert, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const SignatureCapture = () => {
  const webViewRef = useRef(null);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        canvas {
          border: 1px solid #000;
          touch-action: none;
        }
      </style>
    </head>
    <body>
      <canvas id="signatureCanvas" width="1000" height="500"></canvas>
      <script>
        const canvas = document.getElementById('signatureCanvas');
        const ctx = canvas.getContext('2d');
        let drawing = false;

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('touchstart', startDrawing);
        canvas.addEventListener('touchmove', draw);
        canvas.addEventListener('touchend', stopDrawing);

        function startDrawing(e) {
          drawing = true;
          ctx.beginPath();
          ctx.moveTo(getX(e), getY(e));
          e.preventDefault();
        }

        function draw(e) {
          if (!drawing) return;
          ctx.lineTo(getX(e), getY(e));
          ctx.stroke();
          e.preventDefault();
        }

        function stopDrawing(e) {
          drawing = false;
          ctx.closePath();
          e.preventDefault();
        }

        function getX(e) {
          if (e.touches && e.touches[0]) {
            return e.touches[0].clientX - canvas.getBoundingClientRect().left;
          } else {
            return e.clientX - canvas.getBoundingClientRect().left;
          }
        }

        function getY(e) {
          if (e.touches && e.touches[0]) {
            return e.touches[0].clientY - canvas.getBoundingClientRect().top;
          } else {
            return e.clientY - canvas.getBoundingClientRect().top;
          }
        }

        function clearCanvas() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function getBase64() {
          return canvas.toDataURL('image/png');
        }

        window.addEventListener('message', (event) => {
          if (event.data === 'clear') {
            clearCanvas();
          } else if (event.data === 'getBase64') {
            const base64Data = getBase64();
            window.ReactNativeWebView.postMessage(base64Data);
          }
        });
      </script>
    </body>
    </html>
  `;

  const handleSignature = (signature) => {
    Alert.alert('Signature Captured!', signature.substring(0, 100) + '...');
  };

  const clearCanvas = () => {
    webViewRef.current.postMessage('clear');
  };

  const saveSignature = () => {
    webViewRef.current.postMessage('getBase64');
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
        onMessage={(event) => handleSignature(event.nativeEvent.data)}
      />
      <View style={styles.buttons}>
        <Button title="Limpar" onPress={clearCanvas} />
        <Button title="Salvar" onPress={saveSignature} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    width: '100%',
    height: 300,
    backgroundColor: 'transparent',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default SignatureCapture;
