import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, InfoCircledIcon } from '@radix-ui/react-icons';
import './Dialog.scss';

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className='Button violet'>?</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className='DialogOverlay' />
      <Dialog.Content className='DialogContent'>
        <Dialog.Title className='DialogTitle'>Mailhantering</Dialog.Title>
        <Dialog.Description className='DialogDescription'>
          Vi lagrar er e-postadress i vår databas för att använda i ett
          skolprojekt där vi endast samlar statistik över antalet registrerade
          användare. Er e-postadress kommer inte att användas för något annat
          syfte än att mäta antalet användare i vårt projekt. När projektet
          avslutas raderas er e-postadress från vår databas. Vi kommer inte
          skicka några e-postmeddelanden till er.
        </Dialog.Description>
        <div
          style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}
        >
          <Dialog.Close asChild>
            <button className='Button green'>Jag förstår!</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className='IconButton' aria-label='Close'>
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
