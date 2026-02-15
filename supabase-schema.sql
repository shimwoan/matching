-- Supabase에서 실행할 테이블 생성 SQL
-- Supabase Dashboard > SQL Editor에서 실행하세요.

CREATE TABLE applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  gender TEXT NOT NULL CHECK (gender IN ('male', 'female')),
  region TEXT NOT NULL,
  contact TEXT NOT NULL,
  age_confirmed BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS 활성화
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- 누구나 INSERT 가능 (익명 사용자 신청용)
CREATE POLICY "Anyone can insert applications"
  ON applications
  FOR INSERT
  TO anon
  WITH CHECK (true);
