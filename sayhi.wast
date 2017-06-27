(module
  (import "console" "log" (func $log (param i32 i32)))
  (import "js" "memory" (memory 1))
  (data (i32.const 0) "Hi there, a long time ago, came a man with a ship")
  (func (export "read") (param $offset i32) (param $length i32)
    get_local $offset
    get_local $length
    call $log)
)