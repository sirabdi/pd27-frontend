import { Button } from '@/components/atoms/button.atom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from '@/components/atoms/dialog.atom';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/atoms/tabs.atom';
import LoginForm from '../form.molecule/login-form.molecule';

type Props = {
  open: boolean;
  onClose?: () => void;
};

export default function LoginSignUpDialog({ open, onClose }: Props) {
  return (
    <Dialog open={open}>
      <DialogContent className='global-top-bar-auth-modal'>
        <DialogTitle className='global-top-bar-auth-modal-title'>
          Authentication Process
        </DialogTitle>
        <Tabs defaultValue='login'>
          <TabsList>
            <TabsTrigger value='login'>Login</TabsTrigger>
            <TabsTrigger value='sign-up'>Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value='login'>
            <LoginForm onSubmit={data => console.log(data)} />
          </TabsContent>
          <TabsContent value='sign-up'>Sign Up</TabsContent>
        </Tabs>
        <hr className='mb-4' />
        <div className='flex items-center gap-2 justify-end w-full'>
          <Button variant='default'>Submit</Button>
          <Button variant='secondary' onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
