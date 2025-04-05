// src/lib/auth.ts
import { supabase } from './supabaseClient'

/**
 * ログアウト処理（UIやルーターは呼び出し元に任せる）
 */
export const logout = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) {
    throw new Error('ログアウト失敗: ' + error.message)
  }
}
