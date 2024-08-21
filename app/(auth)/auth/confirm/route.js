import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type')
  const next = searchParams.get('next') ?? '/'

  console.log('Received GET request with params:', { token_hash, type, next });

  if (token_hash && type) {
    const supabase = createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      // redirect user to specified redirect URL or root of app
      redirect(next)
    }
    if(error){
        console.error('email link error:', error.message) // Log the error for debugging
        redirect('/?message=' + encodeURIComponent(error.message))
    }
  }

  // redirect the user to an error page with some instructions
  redirect('/login?message=Could not verifiy OTP')
}