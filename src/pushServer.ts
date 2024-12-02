import webpush from 'web-push';
import keys from './Keys.json';

// Configurar las claves VAPID
webpush.setVapidDetails(
  'mailto:jose.padilla.20s@utzmg.edu.mx',
  keys.publicKey,
  keys.privateKey
);

// Definir tipos
interface PushSubscription {
  endpoint: string;
  expirationTime?: number | null;
  keys: {
    p256dh: string;
    auth: string;
  };
}

// Función para enviar notificaciones push
export function sendPush(pushSubscription: PushSubscription, message: string) {
  const payload = JSON.stringify({
    title: 'Pedido registrado',
    body: message,
  });

  return webpush.sendNotification(pushSubscription, payload);
}
 